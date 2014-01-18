var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.tetriminoFactory = {
    createRandomTetriminoAtTopCentre: function (tetriminoDefinitions, rows, columns) {
        var tetriminoDefinition = fallingBlocks.util.getRandomElement(tetriminoDefinitions),
            highestOffsetHeight = tetriminoDefinition.blockOffsets.map(function (offset) {
                    return offset.y;
                }).reduce(function (previous, current) {
                    return Math.max(previous, current);
                }),
            initialCentrePosition = {
                x: Math.floor(columns / 2),
                y: rows - 1 - (highestOffsetHeight - tetriminoDefinition.centreOffset.y)
            };

        return fallingBlocks.game.tetrimino(tetriminoDefinition, initialCentrePosition);
    }
};
