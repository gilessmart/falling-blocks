var fallingBlocks = fallingBlocks || {};
fallingBlocks.rendering = fallingBlocks.rendering || {};

fallingBlocks.rendering.notificationRenderer = function (colours, layout) {
    return {
        render: function (context, message) {
            var messageLines = message.split('\n'),
                textOffsetX = Math.floor(layout.notificationAreaWidth / 2),
                textOffsetY = Math.floor((layout.notificationAreaHeight - layout.notificationTextHeight * messageLines.length) / 2);

            // make border
            context.fillStyle = colours.notificationBorder;
            context.fillRect(
                0,
                0,
                layout.notificationAreaWidth,
                layout.notificationAreaHeight);

            // make background
            context.fillStyle = colours.notificationBackground;
            context.fillRect(
                layout.notificationAreaBorderSize,
                layout.notificationAreaBorderSize,
                layout.notificationAreaWidth - layout.notificationAreaBorderSize * 2,
                layout.notificationAreaHeight - layout.notificationAreaBorderSize * 2);

            // draw text
            context.font = layout.notificationTextHeight + 'px Courier';
            context.textBaseline = 'top';
            context.textAlign = 'center';
            context.fillStyle = colours.notificationText;

            messageLines.forEach(function (line, lineIndex) {
                context.fillText(
                    line,
                    textOffsetX,
                    textOffsetY + layout.notificationTextHeight * lineIndex);
            });

        }
    };
};