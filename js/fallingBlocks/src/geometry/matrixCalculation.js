var fallingBlocks = fallingBlocks || {};
fallingBlocks.geometry = fallingBlocks.game || {};

fallingBlocks.geometry.matrixCalculation = {
    multiplyMatrices: function(subjectMatrix, objectMatrix){
        var subjectMatrixRows = subjectMatrix.getRowVectors(),
            objectMatrixColumns = objectMatrix.getColumnVectors(),
            resultDefinition = subjectMatrixRows.map(function (subjectMatrixRow) {
                return objectMatrixColumns.map(function (objectMatrixColumn) {
                    return subjectMatrixRow.dotProduct(objectMatrixColumn);
                })
            });

        return fallingBlocks.geometry.transformMatrix(resultDefinition);
    },

    multiplyMatrixByVector: function (matrix, vector) {
        var resultVectorDefinition = matrix.getRowVectors().map(function (rowVector) {
                return rowVector.dotProduct(vector);
            });

        return fallingBlocks.geometry.transformVector(resultVectorDefinition);
    },

    project: function (point, transformMatrix) {
        var pointVectorDefinition = [ point.x, point.y, 1 ],
            pointVector = fallingBlocks.geometry.transformVector(pointVectorDefinition),
            resultVector = this.multiplyMatrixByVector(transformMatrix, pointVector);

        return { x: resultVector.getElements()[0], y: resultVector.getElements()[1] };
    }
};
