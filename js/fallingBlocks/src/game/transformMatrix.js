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

        getRowCount: function () {
            return definition.length;
        },

        getColumnCount: function () {
            return Math.min.apply(null, definition.map(function (row) {
                return row.length;
            }));
        },

        isEqualTo: function matricesMatch (objectMatrix) {
            var self = this;
            return self.getRowCount() === objectMatrix.getRowCount() &&
                self.getColumnCount() === objectMatrix.getColumnCount() &&
                (function matrixRowsMatch () {
                    var i,
                        rows = self.getRowCount(),
                        subjectRowVector,
                        objectRowVector;

                    for (i = 0; i < rows; i++) {
                        subjectRowVector = self.getRowVector(i);
                        objectRowVector = objectMatrix.getRowVector(i);
                        if (!subjectRowVector.isEqualTo(objectRowVector)) {
                            return false;
                        }
                    }

                    return true;
                })();
        },

        // TODO - migrate to matrix calculations
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
