describe('landedBlocksCollection', function () {
    it('can return the number of columns', function () {
        var landedBlocks = fallingBlocks.game.landedBlocksCollection(10, 20);
        expect(landedBlocks.getColumns()).toEqual(10);
    });

    it('can return the number of rows', function () {
        var landedBlocks = fallingBlocks.game.landedBlocksCollection(10, 20);
        expect(landedBlocks.getRows()).toEqual(20);
    });

    it('can determine whether a location is allowable', function () {
        var landedBlocks = fallingBlocks.game.landedBlocksCollection(5, 10);

        // negative values of x and y are not allowable
        expect(landedBlocks.isLocationAllowable({ x: -1, y: 0  })).toBe(false);
        expect(landedBlocks.isLocationAllowable({ x: 0, y: -1  })).toBe(false);

        // values of x >= columns are not allowable
        expect(landedBlocks.isLocationAllowable({ x: 5, y: 0 })).toBe(false);

        // other values are allowable, including values of y >= rows
        expect(landedBlocks.isLocationAllowable({ x: 0, y: 0 })).toBe(true);
        expect(landedBlocks.isLocationAllowable({ x: 4, y: 0 })).toBe(true);
        expect(landedBlocks.isLocationAllowable({ x: 0, y: 4 })).toBe(true);
        expect(landedBlocks.isLocationAllowable({ x: 0, y: 5 })).toBe(true);

        // values of y >= rows are allowable
        expect(landedBlocks.isLocationAllowable({ x: 0, y: 11 })).toBe(true);

    });

    it('can determine whether a location is available', function () {
        var landedBlocks = fallingBlocks.game.landedBlocksCollection(5, 10),
            newLocations = [
                { x: 0, y: 0 },
                { x: 2, y: 0 },
                { x: 4, y: 0 },
                { x: 1, y: 1 },
                { x: 3, y: 1 }
            ];

        landedBlocks.addLocations(newLocations);

        // occupied locations are not available
        expect(landedBlocks.isLocationAvailable({ x: 0, y: 0 })).toBe(false);
        expect(landedBlocks.isLocationAvailable({ x: 2, y: 0 })).toBe(false);
        expect(landedBlocks.isLocationAvailable({ x: 4, y: 0 })).toBe(false);
        expect(landedBlocks.isLocationAvailable({ x: 1, y: 1 })).toBe(false);
        expect(landedBlocks.isLocationAvailable({ x: 3, y: 1 })).toBe(false);

        // negative values of x and y are not available
        expect(landedBlocks.isLocationAvailable({ x: -1, y: 0  })).toBe(false);
        expect(landedBlocks.isLocationAvailable({ x: 0, y: -1  })).toBe(false);

        // values of x >= columns are not available
        expect(landedBlocks.isLocationAvailable({ x: 5, y: 0 })).toBe(false);

        // other locations are available
        expect(landedBlocks.isLocationAvailable({ x: 1, y: 0 })).toBe(true);
        expect(landedBlocks.isLocationAvailable({ x: 3, y: 0 })).toBe(true);
        expect(landedBlocks.isLocationAvailable({ x: 0, y: 1 })).toBe(true);
        expect(landedBlocks.isLocationAvailable({ x: 2, y: 1 })).toBe(true);
        expect(landedBlocks.isLocationAvailable({ x: 4, y: 1 })).toBe(true);
        expect(landedBlocks.isLocationAvailable({ x: 0, y: 11 })).toBe(true);
    });

    it('marks added locations as occupied', function () {
        var landedBlocks = fallingBlocks.game.landedBlocksCollection(5, 10),
            newLocations = [
                { x: 0, y: 0 },
                { x: 2, y: 0 },
                { x: 4, y: 0 },
                { x: 1, y: 1 },
                { x: 3, y: 1 }
            ];

        landedBlocks.addLocations(newLocations);

        expect(landedBlocks.isLocationOccupied({ x: 0, y: 0 })).toBe(true);
        expect(landedBlocks.isLocationOccupied({ x: 1, y: 0 })).toBe(false);
        expect(landedBlocks.isLocationOccupied({ x: 2, y: 0 })).toBe(true);
        expect(landedBlocks.isLocationOccupied({ x: 3, y: 0 })).toBe(false);
        expect(landedBlocks.isLocationOccupied({ x: 4, y: 0 })).toBe(true);
        expect(landedBlocks.isLocationOccupied({ x: 0, y: 1 })).toBe(false);
        expect(landedBlocks.isLocationOccupied({ x: 1, y: 1 })).toBe(true);
        expect(landedBlocks.isLocationOccupied({ x: 2, y: 1 })).toBe(false);
        expect(landedBlocks.isLocationOccupied({ x: 3, y: 1 })).toBe(true);
        expect(landedBlocks.isLocationOccupied({ x: 4, y: 1 })).toBe(false);
    });

    it('can calculate the indices of complete rows', function () {
        var landedBlocks = fallingBlocks.game.landedBlocksCollection(5, 10),
            newLocations = [
                { x: 0, y: 0 },
                { x: 2, y: 0 },
                { x: 4, y: 0 },

                { x: 1, y: 1 },
                { x: 3, y: 1 },

                { x: 0, y: 2 },
                { x: 1, y: 2 },
                { x: 2, y: 2 },
                { x: 3, y: 2 },
                { x: 4, y: 2 },

                { x: 0, y: 3 },
                { x: 1, y: 3 },
                { x: 2, y: 3 },
                { x: 3, y: 3 },
                { x: 4, y: 3 },

                { x: 1, y: 4 },
                { x: 3, y: 4 }
            ];

        landedBlocks.addLocations(newLocations);
        expect(landedBlocks.getCompleteRowIndices()).toEqual([ 2, 3 ]);
    });

    it('can remove rows, moving any rows above down', function () {
        var landedBlocks = fallingBlocks.game.landedBlocksCollection(5, 10),
            newLocations = [
                { x: 0, y: 0 },
                { x: 2, y: 0 },
                { x: 4, y: 0 },
                { x: 0, y: 1 },
                { x: 4, y: 1 },
                { x: 0, y: 2 },
                { x: 2, y: 2 },
                { x: 4, y: 2 },
                { x: 1, y: 3 },
                { x: 3, y: 3 }
            ];

        landedBlocks.addLocations(newLocations);
        landedBlocks.removeRows([ 1, 2 ]);

        expect(landedBlocks.isLocationOccupied({ x: 0, y: 1 })).toBe(false);
        expect(landedBlocks.isLocationOccupied({ x: 4, y: 1 })).toBe(false);

        expect(landedBlocks.isLocationOccupied({ x: 0, y: 2 })).toBe(false);
        expect(landedBlocks.isLocationOccupied({ x: 2, y: 2 })).toBe(false);
        expect(landedBlocks.isLocationOccupied({ x: 4, y: 2 })).toBe(false);

        expect(landedBlocks.isLocationOccupied({ x: 1, y: 1 })).toBe(true);
        expect(landedBlocks.isLocationOccupied({ x: 3, y: 1 })).toBe(true);
    });

    it('can determine whether the highest block is above the playing area', function () {
        var landedBlocks = fallingBlocks.game.landedBlocksCollection(3, 3);

        expect(landedBlocks.isHighestBlockAbovePlayingArea()).toBe(false);

        landedBlocks.addLocations([
            { x: 0, y: 0 }
        ]);
        expect(landedBlocks.isHighestBlockAbovePlayingArea()).toBe(false);

        landedBlocks.addLocations([
            { x: 1, y: 1 },
            { x: 1, y: 1 }
        ]);
        expect(landedBlocks.isHighestBlockAbovePlayingArea()).toBe(false);

        landedBlocks.addLocations([
            { x: 0, y: 2 }
        ]);
        expect(landedBlocks.isHighestBlockAbovePlayingArea()).toBe(false);

        landedBlocks.addLocations([
            { x: 1, y: 3 },
            { x: 1, y: 3 }
        ]);
        expect(landedBlocks.isHighestBlockAbovePlayingArea()).toBe(true);
    });
});
