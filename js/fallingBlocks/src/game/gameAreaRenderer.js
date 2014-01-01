var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.gameAreaRenderer = function (blockSize, width, height, colours) {
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

            // render landed blocks
            fallingObjectLocations.forEach(function (blockLocation) {
                context.fillStyle = colours.fallingObject;
                context.fillRect(
                    blockLocation.x * blockSize,
                    height - blockSize - (blockLocation.y * blockSize),
                    blockSize,
                    blockSize);
            });
        }
    };
};
