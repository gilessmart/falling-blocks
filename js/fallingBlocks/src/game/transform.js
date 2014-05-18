var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.transform = function () {
    var matrix = fallingBlocks.game.transformMatrixFactory.getIdentity();

    return {
        rotateQuarterTurns: function (quarterTurns) {
            var quarterTurnsMatrix = fallingBlocks.game.transformMatrixFactory.getQuarterTurns(quarterTurns);
            matrix = fallingBlocks.game.matrixCalculation.multiplyMatrices(quarterTurnsMatrix, matrix);
        },

        rotateQuarterTurnsAboutPoint: function (quarterTurns, point) {
            this.translate(point.x * - 1, point.y * -1);
            this.rotateQuarterTurns(quarterTurns);
            this.translate(point.x, point.y);
        },

        translate: function (x, y) {
            var translationMatrix = fallingBlocks.game.transformMatrixFactory.getTranslation(x, y);
            matrix = fallingBlocks.game.matrixCalculation.multiplyMatrices(translationMatrix, matrix);
        },

        getTransformedLocation: function (location) {
            return fallingBlocks.game.matrixCalculation.project(location, matrix);
        }
    };
};
