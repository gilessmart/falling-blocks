var fallingBlocks = fallingBlocks || {};

fallingBlocks.landedBlocksCollection = function(columns, rows) {
    var landedBlockLocations = [],
        me = {
            getBlockLocations: function () {
                return landedBlockLocations;
            },

            isLocationOccupied: function (location){
                return landedBlockLocations.some(function(landedBlockLocation){
                    return fallingBlocks.util.areEqual(landedBlockLocation, location);
                });
            },

            isLocationAllowable: function (location) {
                return location.x >= 0
                    && location.x < columns
                    && location.y >= 0
                    && location.y < rows;
            },

            isLocationAvailable: function (location) {
                return this.isLocationAllowable(location)
                    && !this.isLocationOccupied(location);
            },

            addLocations: function (blockLocations) {
                landedBlockLocations = landedBlockLocations.concat(blockLocations);
            },

            removeRows: function (rowIndices) {
                // remove rows in reverse index order
                // otherwise the rowIndex could refer to the wrong row
                // todo: implement a distinct check?
                var reverseOrderedRowIndices = fallingBlocks.util.sortNumbers(rowIndices).reverse();
                reverseOrderedRowIndices.forEach(function (rowNumber) {
                    removeRow(rowNumber);
                    moveLocationsDown(getLocationsHigherThan(rowNumber));
                });
            },

            getCompleteRowIndices: function () {
                var result = [],
                    isRowComplete;

                for (var row = 0; row < rows; row++) {
                    isRowComplete = true;

                    for (var col = 0; col < columns; col++) {
                        if (!me.isLocationOccupied({ x: col, y: row })) {
                            isRowComplete = false;
                            break;
                        }
                    }

                    if (isRowComplete) {
                        result.push(row);
                    }
                }

                return result;
            },

            isHighestBlockAbovePlayingArea: function () {
                return landedBlockLocations.some(function (location) {
                    return location.y >= rows;
                });
            }
        };

    function removeRow (rowNumber) {
        var arrayIndices = landedBlockLocations
            .filter(function(location){
                return location.y === rowNumber;
            })
            .map(function(location){
                return landedBlockLocations.indexOf(location);
            });

        // splice items out of array in reverse order
        // otherwise the index of the item in the list could have been
        // changed by a previous splice
        var reverseOrderedArrayIndices = fallingBlocks.util.sortNumbers(arrayIndices).reverse();
        reverseOrderedArrayIndices.forEach(function (index) {
            landedBlockLocations.splice(index, 1);
        });
    }

    function getLocationsHigherThan (rowNumber) {
        return landedBlockLocations.filter(function (location) {
            return location.y > rowNumber;
        });
    }

    function moveLocationsDown (locations) {
        locations.forEach(function (location) {
            location.y -= 1;
        });
    }

    return me;
};
