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
            initialPosition = { x: 1, y: 9 },
            fallingBlock = fallingBlocks.game.fallingObject(definition, initialPosition);

        expect(fallingBlock.getBlockLocations()).toEqual([
            { x: 0, y: 9 },
            { x: 1, y: 9 },
            { x: 2, y: 9 },
            { x: 1, y: 10 }
        ]);
    });

    it('returns positions of falling object blocks after move', function () {
        var definition = {
                centreOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            initialPosition = { x: 1, y: 9 },
            fallingBlock = fallingBlocks.game.fallingObject(definition, initialPosition);

        fallingBlock.move(5, 5);
        expect(fallingBlock.getBlockLocations()).toEqual([
            { x: 5, y: 14 },
            { x: 6, y: 14 },
            { x: 7, y: 14 },
            { x: 6, y: 15 }
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
            initialPosition = { x: 1, y: 9 },
            fallingBlock = fallingBlocks.game.fallingObject(definition, initialPosition);

        fallingBlock.rotate(fallingBlocks.game.rotations.anticlockwise);
        expect(fallingBlock.getBlockLocations()).toEqual([
            { x: 1, y: 8 },
            { x: 1, y: 9 },
            { x: 1, y: 10 },
            { x: 0, y: 9 }
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
            initialPosition = { x: 1, y: 9 },
            fallingBlock = fallingBlocks.game.fallingObject(definition, initialPosition);

        fallingBlock.rotate(fallingBlocks.game.rotations.clockwise);
        expect(fallingBlock.getBlockLocations()).toEqual([
            { x: 1, y: 10 },
            { x: 1, y: 9 },
            { x: 1, y: 8 },
            { x: 2, y: 9 }
        ]);
    });
});
