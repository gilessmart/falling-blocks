var fallingBlocks = fallingBlocks || {};
fallingBlocks.geometry = fallingBlocks.geometry || {};

fallingBlocks.geometry.transform = function () {
    var matrix = fallingBlocks.geometry.transformMatrixFactory.getIdentity();

    return {
        rotateQuarterTurns: function (quarterTurns) {
            var quarterTurnsMatrix = fallingBlocks.geometry.transformMatrixFactory.getQuarterTurns(quarterTurns);
            matrix = fallingBlocks.geometry.matrixCalculation.multiplyMatrices(quarterTurnsMatrix, matrix);
        },

        rotateQuarterTurnsAboutPoint: function (quarterTurns, point) {
            this.translate(point.x * - 1, point.y * -1);
            this.rotateQuarterTurns(quarterTurns);
            this.translate(point.x, point.y);
        },

        translate: function (x, y) {
            var translationMatrix = fallingBlocks.geometry.transformMatrixFactory.getTranslation(x, y);
            matrix = fallingBlocks.geometry.matrixCalculation.multiplyMatrices(translationMatrix, matrix);
        },

        getTransformedLocation: function (location) {
            return fallingBlocks.geometry.matrixCalculation.project(location, matrix);
        }
    };
};
