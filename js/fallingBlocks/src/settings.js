/**
 * Created by Giles on 19/12/13.
 */
fallingBlocks.settings = {
    defaultGameSettings: {
        rows: 12,
        columns: 25,
        dropInterval: 750,
        fallingBlockDefinitions: [
            {
                centreOffset: { x: 1, y: 1 },
                blockLocations: [
                    { x: 1, y: 0 },
                    { x: 1, y: 1 },
                    { x: 1, y: 2 }
                ]
            },
            {
                centreOffset: { x: 1, y: 1 },
                blockLocations: [
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
