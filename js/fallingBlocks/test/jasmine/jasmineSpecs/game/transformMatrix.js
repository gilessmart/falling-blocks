describe('matrixCalculation', function() {

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

});
