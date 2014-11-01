var fallingBlocks = fallingBlocks || {};
fallingBlocks.rendering = fallingBlocks.rendering || {};

fallingBlocks.rendering.gameAreaRenderer = function (blockSize, width, height, colours) {
    return {
        render: function (context, landedBlockLocations, fallingObjectLocations) {
            // render background
            context.fillStyle = colours.background;
            context.fillRect(0, 0, width, height);

            // render landed blocks
            landedBlockLocations.forEach(function (blockLocation) {
                context.fillStyle = colours.landedBlock;
                context.fillRect(
                    blockLocation.x * blockSize,
                    height - blockSize - (blockLocation.y * blockSize),
                    blockSize,
                    blockSize);
            });

        // render falling object blocks
            fallingObjectLocations.forEach(function (blockLocation) {
                context.fillStyle = colours.tetrimino;
                context.fillRect(
                    blockLocation.x * blockSize,
                    height - blockSize - (blockLocation.y * blockSize),
                    blockSize,
                    blockSize);
            });
        }
    };
};
