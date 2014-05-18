describe('tetrimino', function () {
    it('returns initial positions of falling object blocks', function () {
        var definition = {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            tetrimino = fallingBlocks.game.tetrimino(definition, initialPosition);

        expect(tetrimino.getBlockLocations()).toEqual([
            { x: 10, y: 10 },
            { x: 11, y: 10 },
            { x: 12, y: 10 },
            { x: 11, y: 11 }
        ]);
    });

    it('returns positions of falling object blocks after moving down', function () {
        var definition = {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            tetrimino = fallingBlocks.game.tetrimino(definition, initialPosition);

        tetrimino.move(fallingBlocks.game.directions.down);
        expect(tetrimino.getBlockLocations()).toEqual([
            { x: 10, y: 9 },
            { x: 11, y: 9 },
            { x: 12, y: 9 },
            { x: 11, y: 10 }
        ]);
    });

    it('returns positions of falling object blocks after rotating anticlockwise', function () {
        var definition = {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            tetrimino = fallingBlocks.game.tetrimino(definition, initialPosition);

        tetrimino.rotate(fallingBlocks.game.rotations.anticlockwise);
        expect(tetrimino.getBlockLocations()).toEqual([
            { x: 11, y: 9 },
            { x: 11, y: 10 },
            { x: 11, y: 11 },
            { x: 10, y: 10 }
        ]);
    });

    it('returns positions of falling object blocks after rotating clockwise', function () {
        var definition = {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            tetrimino = fallingBlocks.game.tetrimino(definition, initialPosition);

        tetrimino.rotate(fallingBlocks.game.rotations.clockwise);
        expect(tetrimino.getBlockLocations()).toEqual([
            { x: 11, y: 11 },
            { x: 11, y: 10 },
            { x: 11, y: 9 },
            { x: 12, y: 10 }
        ]);
    });

    it('returns positions of a square after rotating about a location (integer x & y)', function () {
        var definition = {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 5, y: 10 },
            tetrimino = fallingBlocks.game.tetrimino(definition, initialPosition);

        tetrimino.rotate(fallingBlocks.game.rotations.anticlockwise);
        expect(tetrimino.getBlockLocations()).toEqual([
            { x: 6, y: 9 },
            { x: 6, y: 10 },
            { x: 6, y: 11 },
            { x: 5, y: 10 }
        ]);
    });

    it('returns positions of a square after rotating about a position (decimal x & y)', function () {
        var definition = {
                rotationOffset: { x: 0.5, y: 0.5 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 0, y: 1 },
                    { x: 1, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            tetrimino = fallingBlocks.game.tetrimino(definition, initialPosition);

        tetrimino.rotate(fallingBlocks.game.rotations.anticlockwise);
        expect(tetrimino.getBlockLocations()).toEqual([
            { x: 11, y: 10 },
            { x: 10, y: 10 },
            { x: 11, y: 11 },
            { x: 10, y: 11 }
        ]);
    });

    it('can calculate translated object block locations', function () {
        var definition = {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialLocation = { x: 10, y: 10 },
            tetrimino = fallingBlocks.game.tetrimino(definition, initialLocation);

        expect(tetrimino.getTranslatedBlockLocations(fallingBlocks.game.directions.down))
            .toEqual([
                { x: 10, y: 9 },
                { x: 11, y: 9 },
                { x: 12, y: 9 },
                { x: 11, y: 10 }
            ]);

        expect(tetrimino.getTranslatedBlockLocations(fallingBlocks.game.directions.left))
            .toEqual([
                { x: 9, y: 10 },
                { x: 10, y: 10 },
                { x: 11, y: 10 },
                { x: 10, y: 11 }
            ]);

        expect(tetrimino.getTranslatedBlockLocations(fallingBlocks.game.directions.right))
            .toEqual([
                { x: 11, y: 10 },
                { x: 12, y: 10 },
                { x: 13, y: 10 },
                { x: 12, y: 11 }
            ]);
    });

    it('can calculate rotated object block locations', function () {
        var definition = {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            tetrimino = fallingBlocks.game.tetrimino(definition, initialPosition);

        expect(tetrimino.getRotatedBlockLocations(fallingBlocks.game.rotations.anticlockwise))
            .toEqual([
                { x: 11, y: 9 },
                { x: 11, y: 10 },
                { x: 11, y: 11 },
                { x: 10, y: 10 }
            ]);

        expect(tetrimino.getRotatedBlockLocations(fallingBlocks.game.rotations.clockwise))
            .toEqual([
                { x: 11, y: 11 },
                { x: 11, y: 10 },
                { x: 11, y: 9 },
                { x: 12, y: 10 }
            ]);
    });
});
