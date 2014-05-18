var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.scoreBoardRenderer = function (width, height, colours, layout) {
    return {
        render: function (context, score) {
            // render background
            context.fillStyle = colours.scoreboardBackground;
            context.fillRect(0, 0, width, height);

            // render score
            var scoreWellHeight = 2 * (layout.scoreBoardTextHeight + layout.scoreBoardWellPadding),
                scoreWellWidth = width - 2 * layout.scoreBoardPadding;

            context.fillStyle = colours.scoreBoardWell;
            context.fillRect(
                layout.scoreBoardPadding,
                layout.scoreBoardPadding,
                scoreWellWidth,
                scoreWellHeight);

            context.font = layout.scoreBoardTextHeight + 'px Courier';

            context.textBaseline = 'top';
            context.fillStyle = colours.scoreBoardText;
            context.fillText(
                'Lines',
                layout.scoreBoardWellPadding + layout.scoreBoardPadding,
                layout.scoreBoardWellPadding + layout.scoreBoardPadding);

            context.textBaseline = 'top';
            context.fillStyle = colours.scoreBoardText;
            context.fillText(
                score,
                layout.scoreBoardWellPadding + layout.scoreBoardPadding,
                layout.scoreBoardWellPadding + layout.scoreBoardPadding + layout.scoreBoardTextHeight);
        }
    };
};
