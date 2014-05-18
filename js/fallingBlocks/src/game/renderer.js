var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.renderer = function (context, width, height, gameState, spawnAreaRows, colours, layout) {
    var rows = gameState.landedBlocks.getRowVectors(),// + spawnAreaRows,
        columns = gameState.landedBlocks.getColumnVectors(),
        maxBlockWidth = Math.floor(width / columns),
        maxBlockHeight = Math.floor(height / rows),
        blockSize = Math.min(maxBlockHeight, maxBlockWidth),
        gameAreaWidth = blockSize * columns,
        gameAreaHeight = blockSize * rows,
        gameAreaOffsetX = Math.floor((width - gameAreaWidth - layout.scoreBoardWidth) / 2),
        gameAreaOffsetY = Math.floor((height - gameAreaHeight) / 2),
        gameAreaRenderer = fallingBlocks.game.gameAreaRenderer(blockSize, gameAreaWidth, gameAreaHeight, colours),
        scoreBoardRenderer = fallingBlocks.game.scoreBoardRenderer(layout.scoreBoardWidth, gameAreaHeight, colours, layout);

    return {
        render: function () {
            // render game area
            context.save();
            context.translate(gameAreaOffsetX, gameAreaOffsetY);
            gameAreaRenderer.render(
                context,
                gameState.landedBlocks.getBlockLocations(),
                gameState.tetrimino.getBlockLocations());
            context.restore();

            // render scoreboard
            context.save();
            context.translate(gameAreaOffsetX + gameAreaWidth, gameAreaOffsetY);
            scoreBoardRenderer.render(
                context,
                gameState.score);
            context.restore();
        }
    };
};
