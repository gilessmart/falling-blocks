fallingBlocks.game.landedBlocksCollection = function(columns, rows) {
    var landedBlockLocations = [],
        me = {
            getRows: function(){
                return rows;
            },

            getColumns: function(){
                return columns;
            },

            isLocationOccupied: function(location){
                return landedBlockLocations.some(function(landedBlockLocation){
                    return fallingBlocks.util.areEqual(landedBlockLocation, location);
                });
            },

            landBlocks: function(blockLocations) {
                landedBlockLocations = landedBlockLocations.concat(blockLocations);
            },

            removeCompleteRows: function() {
                var completeRowNumbers = getCompleteRowNumbers();

                completeRowNumbers.forEach(function(rowNumber){
                    removeRow(rowNumber);
                    moveLocationsDown(getLocationsHigherThan(rowNumber));
                });
            }
        };

    function getCompleteRowNumbers() {
        var result = [],
            isRowComplete;

        for (var row = 0; row < rows; row++) {
            isRowComplete = true;

            for (var col = 0; col < columns; col++) {
                if (!me.isLocationOccupied({ x: row, y: col})) {
                    isRowComplete = false;
                    break;
                }
            }

            if (isRowComplete) {
                result.push(row);
            }
        }

        return result;
    }

    function removeRow(rowNumber){
        var arrayIndices = landedBlockLocations
            .filter(function(location){
                return location.x === rowNumber;
            })
            .map(function(location){
                return landedBlockLocations.indexOf(location);
            });

        arrayIndices.forEach(function(index){
            landedBlockLocations.splice(index, 1);
        });
    }

    function getLocationsHigherThan(rowNumber) {
        return landedBlockLocations.filter(function(location){
            return location.y > rowNumber;
        });
    }

    function moveLocationsDown(locations) {
        locations.forEach(function(location){
            location.y -= 1;
        });
    }

    return me;
};
