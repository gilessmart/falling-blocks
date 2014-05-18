var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.tetriminoFactory = (function () {
    function getTetriminoWidth (tetriminoDefinition) {
        var lowestX = Math.min.apply(null, tetriminoDefinition.blockOffsets.map(function (location) {
                return location.x;
            })),
            highestX = Math.max.apply(null, tetriminoDefinition.blockOffsets.map(function (location) {
                return location.x;
            }));

        return highestX - lowestX;
    }

    return {
        createRandomTetriminoAtTopCentre: function (tetriminoDefinitions, rows, columns) {
            var tetriminoDefinition = fallingBlocks.util.getRandomElement(tetriminoDefinitions),
                highestOffsetHeight = tetriminoDefinition.blockOffsets.map(function (offset) {
                    return offset.y;
                }).reduce(function (previous, current) {
                    return Math.max(previous, current);
                }),
                width = getTetriminoWidth(tetriminoDefinition),
                initialCentrePosition = {
                    x: Math.floor((columns - width) / 2),
                    y: rows - 1 - highestOffsetHeight
                };



            return fallingBlocks.game.tetrimino(tetriminoDefinition, initialCentrePosition);
        }
    };
})();
