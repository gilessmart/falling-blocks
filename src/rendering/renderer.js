var fallingBlocks = fallingBlocks || {};
fallingBlocks.rendering = fallingBlocks.rendering || {};

fallingBlocks.rendering.renderer = function (context, rows, columns, width, height, gameState, colours, layout, notificationMessages) {
    var maxBlockWidth = Math.floor(width / columns),
        maxBlockHeight = Math.floor(height / rows),
        maxBlockSize = Math.min(maxBlockHeight, maxBlockWidth),
        blockSize = maxBlockSize - (maxBlockSize % 8),
        gameAreaWidth = blockSize * columns,
        gameAreaHeight = blockSize * rows,
        gameAreaOffsetX = Math.floor((width - gameAreaWidth - layout.scoreBoardWidth) / 2),
        gameAreaOffsetY = Math.floor((height - gameAreaHeight) / 2),
        gameAreaRenderer = fallingBlocks.rendering.gameAreaRenderer(blockSize, gameAreaWidth, gameAreaHeight, colours),
        scoreBoardRenderer = fallingBlocks.rendering.scoreBoardRenderer(layout.scoreBoardWidth, gameAreaHeight, colours, layout),
        notificationAreaOffsetX = Math.floor((gameAreaWidth + layout.scoreBoardWidth - layout.notificationAreaWidth) / 2),
        notificationAreaOffsetY = Math.floor((gameAreaHeight - layout.notificationAreaHeight) / 2),
        notificationRenderer = fallingBlocks.rendering.notificationRenderer(colours, layout);

    return {
        render: function () {
            // render game area
            context.save();
            context.translate(gameAreaOffsetX, gameAreaOffsetY);
            gameAreaRenderer.render(
                context,
                gameState.landedBlocks ? gameState.landedBlocks.getBlockLocations() : [],
                gameState.tetrimino ? gameState.tetrimino.getBlockLocations() : []);
            context.restore();

            // render scoreboard
            context.save();
            context.translate(gameAreaOffsetX + gameAreaWidth, gameAreaOffsetY);
            scoreBoardRenderer.render(
                context,
                gameState.score);
            context.restore();

            // render notification
            if (notificationMessages[gameState.state]) {
                context.save();
                context.fillStyle = 'rgba(0, 0, 0, 0.7)';
                context.fillRect(0, 0, width + layout.notificationAreaWidth, height);
                context.restore();

                context.save();
                context.translate(notificationAreaOffsetX, notificationAreaOffsetY);
                notificationRenderer.render(
                    context,
                    notificationMessages[gameState.state]);
                context.restore();
            }
        }
    };
};
