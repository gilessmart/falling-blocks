describe('transformMatrix', function() {

    it('can count rows in a matrix', function () {
        var matrixADefinition = [ [ 0, 0 ],
                                  [ 1, 1 ],
                                  [ 2, 2 ] ],
            matrixA = fallingBlocks.game.transformMatrix(matrixADefinition);

        expect(matrixA.getRowCount()).toBe(3);
    });

    it('can count cols in a matrix', function () {
        var matrixADefinition = [ [ 0, 0 ],
                                  [ 1, 1 ],
                                  [ 2, 2 ] ],
            matrixA = fallingBlocks.game.transformMatrix(matrixADefinition);

        expect(matrixA.getColumnCount()).toBe(2);
    });

    it('can identify matching matrices', function () {
        var matrixADefinition = [   [ 0, 0 ],
                                    [ 1, 1 ],
                                    [ 2, 2 ]    ],
            matrixA = fallingBlocks.game.transformMatrix(matrixADefinition),
            matrixBDefinition = [   [ 0, 0 ],
                                    [ 1, 1 ],
                                    [ 2, 2 ]    ],
            matrixB = fallingBlocks.game.transformMatrix(matrixBDefinition);

        expect(matrixA.isEqualTo(matrixB)).toBe(true);
    });

    it('can identify non-matching matrices', function () {
        var matrixADefinition = [   [ 0, 0 ],
                                    [ 1, 1 ],
                                    [ 2, 2 ]    ],
            matrixA = fallingBlocks.game.transformMatrix(matrixADefinition),
            matrixBDefinition = [   [ 0, 0 ],
                                    [ 1, 1 ],
                                    [ 2, 10 ]    ],
            matrixB = fallingBlocks.game.transformMatrix(matrixBDefinition);

        expect(matrixA.isEqualTo(matrixB)).not.toBe(true);
    });

    it('can get the row vectors of a matrix', function () {
        var matrixADefinition = [   [ 0, 0 ],
                                    [ 1, 1 ],
                                    [ 2, 2 ]    ],
            matrixA = fallingBlocks.game.transformMatrix(matrixADefinition),
            expectedRows = [
                fallingBlocks.game.transformVector([ 0, 0 ]),
                fallingBlocks.game.transformVector([ 1, 1 ]),
                fallingBlocks.game.transformVector([ 2, 2 ])
            ],
            rows = matrixA.getRows();

        expect(rows.length).toBe(expectedRows.length);
        expect(rows[0].isEqualTo(expectedRows[0])).toBe(true);
        expect(rows[1].isEqualTo(expectedRows[1])).toBe(true);
        expect(rows[2].isEqualTo(expectedRows[2])).toBe(true);
    });

    it('can get the column vectors of a matrix', function () {
        var matrixADefinition = [   [ 0, 3 ],
                                    [ 1, 4 ],
                                    [ 2, 5 ]    ],
            matrixA = fallingBlocks.game.transformMatrix(matrixADefinition),
            expectedColumns = [
                fallingBlocks.game.transformVector([ 0, 1, 2 ]),
                fallingBlocks.game.transformVector([ 3, 4, 5 ])
            ],
            columns = matrixA.getColumns();

        expect(columns.length).toBe(expectedColumns.length);
        expect(columns[0].isEqualTo(expectedColumns[0])).toBe(true);
        expect(columns[1].isEqualTo(expectedColumns[1])).toBe(true);
    });

});
