var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.settings = {
    defaultGameSettings: {
        rows: 12,
        columns: 25,
        dropInterval: 750,
        fallingBlockDefinitions: [
            {
                centreOffset: { x: 1, y: 1 },
                blockOffsets: [
                    { x: 1, y: 0 },
                    { x: 1, y: 1 },
                    { x: 1, y: 2 }
                ]
            },
            {
                centreOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            {
                centreOffset: { x: 1, y: 1 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 0, y: 1 },
                    { x: 0, y: 2 },
                    { x: 1, y: 0 },
                    { x: 1, y: 1 },
                    { x: 1, y: 2 },
                    { x: 2, y: 0 },
                    { x: 2, y: 1 },
                    { x: 2, y: 2 }
                ]
            }
        ]
    },

    defaultKeyCodes: {
        moveLeft: 37,
        moveRight: 39,
        moveDown: 40,
        rotateClockwise: 65,
        rotateAntiClockwise: 83
    }
};
