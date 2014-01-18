var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.tetriminoFactory = {
    createRandomTetriminoAtTopCentre: function (tetriminoDefinitions, rows, columns) {
        var tetriminoDefinition = fallingBlocks.util.getRandomElement(tetriminoDefinitions),
            initialPosition = {
                x: Math.floor(columns / 2),
                y: rows + tetriminoDefinition.centreOffset.y
            };

        return fallingBlocks.game.tetrimino(tetriminoDefinition, initialPosition);
    }
};
