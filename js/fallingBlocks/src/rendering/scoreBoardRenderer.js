var fallingBlocks = fallingBlocks || {};
fallingBlocks.rendering = fallingBlocks.game || {};

fallingBlocks.rendering.scoreBoardRenderer = function (width, height, colours, layout) {
    function renderWell(context, width, height, label, value) {
        context.fillStyle = colours.scoreBoardWell;
        context.fillRect(
            0,
            0,
            width,
            height);

        context.font = layout.scoreBoardTextHeight + 'px Courier';

        context.textBaseline = 'top';
        context.fillStyle = colours.scoreBoardText;
        context.fillText(
                label,
                layout.scoreBoardWellPadding,
                layout.scoreBoardWellPadding);

        context.textBaseline = 'top';
        context.fillStyle = colours.scoreBoardText;
        context.fillText(
                value,
                layout.scoreBoardWellPadding,
                layout.scoreBoardWellPadding + layout.scoreBoardTextHeight);
    }

    return {
        render: function (context, score) {
            // render background
            context.fillStyle = colours.scoreboardBackground;
            context.fillRect(0, 0, width, height);

            var scoreWellHeight = 2 * (layout.scoreBoardTextHeight + layout.scoreBoardWellPadding),
                scoreWellWidth = width - 2 * layout.scoreBoardPadding;

            context.save();
            context.translate(layout.scoreBoardPadding, layout.scoreBoardPadding);
            renderWell(context, scoreWellWidth, scoreWellHeight, 'Lines', score.lines);

            context.translate(0, scoreWellHeight + layout.scoreBoardWellGap);
            renderWell(context, scoreWellWidth, scoreWellHeight, 'Score', score.points);

            context.translate(0, scoreWellHeight + layout.scoreBoardWellGap);
            renderWell(context, scoreWellWidth, scoreWellHeight, 'Level', score.level);

            context.restore();
        }
    };
};
