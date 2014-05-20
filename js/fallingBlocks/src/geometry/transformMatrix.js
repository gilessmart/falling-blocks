var fallingBlocks = fallingBlocks || {};
fallingBlocks.geometry = fallingBlocks.game || {};

fallingBlocks.geometry.transformMatrix = function (matrixDefinition) {
    var definition = [].concat(matrixDefinition);

    return {
        getRowVectors: function () {
            return definition.map(function (rowDefinition) {
                return fallingBlocks.geometry.transformVector(rowDefinition);
            });
        },

        getColumnVectors: function () {
            var columns = [],
                columnCount = this.getColumnCount(),
                rowCount = this.getRowCount(),
                columnIndex,
                rowIndex;

            for (columnIndex = 0; columnIndex < columnCount; columnIndex++) {
                var columnDefinition = [];

                for (rowIndex = 0; rowIndex < rowCount; rowIndex++) {
                    columnDefinition.push(definition[rowIndex][columnIndex]);
                }

                columns.push(fallingBlocks.geometry.transformVector(columnDefinition));
            }

            return columns;
        },

        getRowCount: function () {
            return definition.length;
        },

        getColumnCount: function () {
            return  Math.min.apply(null, definition.map(function (row) {
                        return row.length;
                    }));
        },

        isEqualTo: function matricesMatch (objectMatrix) {
            return  this.getRowCount() === objectMatrix.getRowCount() &&
                    this.getColumnCount() === objectMatrix.getColumnCount() &&
                    this.getRowVectors().every(function (subjectRowVector, rowIndex) {
                        var objectRowVector = objectMatrix.getRowVectors()[rowIndex];
                        return subjectRowVector.isEqualTo(objectRowVector);
                    });
        }
    }
};
