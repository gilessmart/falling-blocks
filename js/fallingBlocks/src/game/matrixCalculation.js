var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.matrixCalculation = {
    multiplyMatrices: function(subjectMatrix, objectMatrix){
        var subjectMatrixRows = subjectMatrix.getRows(),
            objectMatrixColumns = objectMatrix.getColumns(),
            resultDefinition = subjectMatrixRows.map(function (subjectMatrixRow) {
                return objectMatrixColumns.map(function (objectMatrixColumn) {
                    return subjectMatrixRow.dotProduct(objectMatrixColumn);
                })
            });

        return fallingBlocks.game.transformMatrix(resultDefinition);
    },

    multiplyMatrixByVector: function (matrix, vector) {
        var resultVectorDefinition = matrix.getRows().map(function (rowVector) {
                return rowVector.dotProduct(vector);
            });

        return fallingBlocks.game.transformVector(resultVectorDefinition);
    },

    project: function (point, transformMatrix) {
        var pointVectorDefinition = [ point.x, point.y, 1 ],
            pointVector = fallingBlocks.game.transformVector(pointVectorDefinition),
            resultVector = this.multiplyMatrixByVector(transformMatrix, pointVector);

        return { x: resultVector.getElements()[0], y: resultVector.getElements()[1] };
    }
};
