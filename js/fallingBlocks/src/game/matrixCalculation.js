var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.matrixCalculation = {
    multiplyMatrices: function(subjectMatrix, objectMatrix){
        var definition = [
            [
                subjectMatrix.getRowVector(0).dotProduct(objectMatrix.getColumnVector(0)),
                subjectMatrix.getRowVector(0).dotProduct(objectMatrix.getColumnVector(1)),
                subjectMatrix.getRowVector(0).dotProduct(objectMatrix.getColumnVector(2))
            ],
            [
                subjectMatrix.getRowVector(1).dotProduct(objectMatrix.getColumnVector(0)),
                subjectMatrix.getRowVector(1).dotProduct(objectMatrix.getColumnVector(1)),
                subjectMatrix.getRowVector(1).dotProduct(objectMatrix.getColumnVector(2))
            ],
            [
                subjectMatrix.getRowVector(2).dotProduct(objectMatrix.getColumnVector(0)),
                subjectMatrix.getRowVector(2).dotProduct(objectMatrix.getColumnVector(1)),
                subjectMatrix.getRowVector(2).dotProduct(objectMatrix.getColumnVector(2))
            ]
        ];

        return fallingBlocks.game.transformMatrix(definition);
    },

    multiplyMatrixByVector: function (matrix, vector) {
        var resultVectorDefinition = [
                matrix.getRowVector(0).dotProduct(vector),
                matrix.getRowVector(1).dotProduct(vector),
                matrix.getRowVector(2).dotProduct(vector)
            ];

        return fallingBlocks.game.transformVector(resultVectorDefinition);
    },

    project: function (point, transformMatrix) {
        var pointVectorDefinition = [ point.x, point.y, 1 ],
            pointVector = fallingBlocks.game.transformVector(pointVectorDefinition),
            resultVector = this.multiplyMatrixByVector(transformMatrix, pointVector);

        return { x: resultVector.getElement(0), y: resultVector.getElement(1) };
    }
};
