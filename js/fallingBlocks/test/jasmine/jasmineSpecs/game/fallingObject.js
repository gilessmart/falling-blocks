describe('fallingObject', function () {
    it('returns initial positions of falling object blocks', function () {
        var definition = {
                centreOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            fallingBlock = fallingBlocks.game.fallingObject(definition, initialPosition);

        expect(fallingBlock.getBlockLocations()).toEqual([
            { x: 9, y: 10 },
            { x: 10, y: 10 },
            { x: 11, y: 10 },
            { x: 10, y: 11 }
        ]);
    });

    it('returns positions of falling object blocks after moving down', function () {
        var definition = {
                centreOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            fallingBlock = fallingBlocks.game.fallingObject(definition, initialPosition);

        fallingBlock.move(fallingBlocks.game.directions.down);
        expect(fallingBlock.getBlockLocations()).toEqual([
            { x: 9, y: 9 },
            { x: 10, y: 9 },
            { x: 11, y: 9 },
            { x: 10, y: 10 }
        ]);
    });

    it('returns positions of falling object blocks after rotating anticlockwise', function () {
        var definition = {
                centreOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            fallingBlock = fallingBlocks.game.fallingObject(definition, initialPosition);

        fallingBlock.rotate(fallingBlocks.game.rotations.anticlockwise);
        expect(fallingBlock.getBlockLocations()).toEqual([
            { x: 10, y: 9 },
            { x: 10, y: 10 },
            { x: 10, y: 11 },
            { x: 9, y: 10 }
        ]);
    });

    it('returns positions of falling object blocks after rotating clockwise', function () {
        var definition = {
                centreOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            fallingBlock = fallingBlocks.game.fallingObject(definition, initialPosition);

        fallingBlock.rotate(fallingBlocks.game.rotations.clockwise);
        expect(fallingBlock.getBlockLocations()).toEqual([
            { x: 10, y: 11 },
            { x: 10, y: 10 },
            { x: 10, y: 9 },
            { x: 11, y: 10 }
        ]);
    });

    it('can calculate translated object block locations', function () {
        var definition = {
                centreOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            fallingBlock = fallingBlocks.game.fallingObject(definition, initialPosition);

        expect(fallingBlock.getTranslatedBlockLocations(fallingBlocks.game.directions.down))
            .toEqual([
                { x: 9, y: 9 },
                { x: 10, y: 9 },
                { x: 11, y: 9 },
                { x: 10, y: 10 }
            ]);

        expect(fallingBlock.getTranslatedBlockLocations(fallingBlocks.game.directions.left))
            .toEqual([
                { x: 8, y: 10 },
                { x: 9, y: 10 },
                { x: 10, y: 10 },
                { x: 9, y: 11 }
            ]);

        expect(fallingBlock.getTranslatedBlockLocations(fallingBlocks.game.directions.right))
            .toEqual([
                { x: 10, y: 10 },
                { x: 11, y: 10 },
                { x: 12, y: 10 },
                { x: 11, y: 11 }
            ]);
    });

    it('can calculate rotated object block locations', function () {
        var definition = {
                centreOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 10, y: 10 },
            fallingBlock = fallingBlocks.game.fallingObject(definition, initialPosition);

        expect(fallingBlock.getRotatedBlockLocations(fallingBlocks.game.rotations.anticlockwise))
            .toEqual([
                { x: 10, y: 9 },
                { x: 10, y: 10 },
                { x: 10, y: 11 },
                { x: 9, y: 10 }
            ]);

        expect(fallingBlock.getRotatedBlockLocations(fallingBlocks.game.rotations.clockwise))
            .toEqual([
                { x: 10, y: 11 },
                { x: 10, y: 10 },
                { x: 10, y: 9 },
                { x: 11, y: 10 }
            ]);
    });
});
