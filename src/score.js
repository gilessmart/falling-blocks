var fallingBlocks = fallingBlocks || {};

fallingBlocks.score = function () {
    function getPointsForLines (lineCount) {
        var basePoints = 0;

        switch (lineCount) {
            case 1:
                basePoints = 40;
                break;

            case 2:
                basePoints = 100;
                break;

            case 3:
                basePoints = 300;
                break;

            case 4:
                basePoints = 1200;
                break;
        }

        return basePoints * (this.level + 1);
    }

    return {
        lines: 0,
        points: 0,
        level: 0,

        addLines: function (lineCount) {
            this.points += getPointsForLines.call(this, lineCount);

            // if we have passed a 10 line boundary
            if (Math.floor(this.lines / 10) !== Math.floor((this.lines + lineCount) / 10)) {
                this.level++;
                this.onLevelUp();
            }

            this.lines += lineCount;
        },

        onLevelUp: function () {},

        reset: function () {
            this.lines = 0;
            this.points = 0;
            this.level = 0;
        }
    };
};
