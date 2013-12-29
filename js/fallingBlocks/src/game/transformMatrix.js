var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.transformMatrix = function (matrixDefinition) {
    var definition = [].concat(matrixDefinition);

    return {
        getRowVector: function(rowIndex) {
            return fallingBlocks.game.transformVector(definition[rowIndex]);
        },

        getColumnVector: function(columnIndex) {
            return fallingBlocks.game.transformVector(
                definition.map(function(row){
                    return row[columnIndex];
                })
            );
        },

        dotProduct: function(otherMatrix){
            var definition = [
                [
                    this.getRowVector(0).dotProduct(otherMatrix.getColumnVector(0)),
                    this.getRowVector(0).dotProduct(otherMatrix.getColumnVector(1)),
                    this.getRowVector(0).dotProduct(otherMatrix.getColumnVector(2))
                ],
                [
                    this.getRowVector(1).dotProduct(otherMatrix.getColumnVector(0)),
                    this.getRowVector(1).dotProduct(otherMatrix.getColumnVector(1)),
                    this.getRowVector(1).dotProduct(otherMatrix.getColumnVector(2))
                ],
                [
                    this.getRowVector(2).dotProduct(otherMatrix.getColumnVector(0)),
                    this.getRowVector(2).dotProduct(otherMatrix.getColumnVector(1)),
                    this.getRowVector(2).dotProduct(otherMatrix.getColumnVector(2))
                ]
            ];

            return fallingBlocks.game.transformMatrix(definition);
        }
    }
};
