describe('matrixCalculation', function() {

    it('can multiply the identity by an arbitrary matrix', function () {
        var matrixCalculation = fallingBlocks.geometry.matrixCalculation,
            identityDefinition = [  [ 1, 0, 0 ],
                                    [ 0, 1, 0 ],
                                    [ 0, 0, 1 ]  ],
            identity = fallingBlocks.geometry.transformMatrix(identityDefinition),
            matrixADefinition = [   [ 1, 2, 3 ],
                                    [ 4, 5, 6 ],
                                    [ 7, 8, 9 ]  ],
            matrixA = fallingBlocks.geometry.transformMatrix(matrixADefinition),
            expectedResultDefinition = [    [ 1, 2, 3 ],
                                            [ 4, 5, 6 ],
                                            [ 7, 8, 9 ]  ],
            expectedResult = fallingBlocks.geometry.transformMatrix(expectedResultDefinition),
            actualResult = matrixCalculation.multiplyMatrices(identity, matrixA);

        expect(actualResult.isEqualTo(expectedResult)).toBe(true);
    });

    it('can multiply a rotate by a translate', function () {
        var matrixCalculation = fallingBlocks.geometry.matrixCalculation,
            transformMatrixDefinitionFactory = fallingBlocks.geometry.transformMatrixDefinitionFactory,
            rotateMatrixDefinition = transformMatrixDefinitionFactory.getQuarterTurns(1),
            rotateMatrix = fallingBlocks.geometry.transformMatrix(rotateMatrixDefinition),
            translateMatrixDefinition = transformMatrixDefinitionFactory.getTranslation(4, 4),
            translateMatrix = fallingBlocks.geometry.transformMatrix(translateMatrixDefinition),
            expectedResultDefinition = [    [ 0, -1, -4 ],
                                            [ 1, 0, 4 ],
                                            [ 0, 0, 1 ]  ],
            expectedResult = fallingBlocks.geometry.transformMatrix(expectedResultDefinition),
            actualResult = matrixCalculation.multiplyMatrices(rotateMatrix, translateMatrix);

        expect(actualResult.isEqualTo(expectedResult)).toBe(true);
    });

    it('can multiply a translate by a rotate', function () {
        var matrixCalculation = fallingBlocks.geometry.matrixCalculation,
            transformMatrixDefinitionFactory = fallingBlocks.geometry.transformMatrixDefinitionFactory,
            rotateMatrixDefinition = transformMatrixDefinitionFactory.getQuarterTurns(1),
            rotateMatrix = fallingBlocks.geometry.transformMatrix(rotateMatrixDefinition),
            translateMatrixDefinition = transformMatrixDefinitionFactory.getTranslation(4, 4),
            translateMatrix = fallingBlocks.geometry.transformMatrix(translateMatrixDefinition),
            expectedResultDefinition = [    [ 0, -1, 4 ],
                                            [ 1, 0, 4 ],
                                            [ 0, 0, 1 ]  ],
            expectedResult = fallingBlocks.geometry.transformMatrix(expectedResultDefinition),
            actualResult = matrixCalculation.multiplyMatrices(translateMatrix, rotateMatrix);

        expect(actualResult.isEqualTo(expectedResult)).toBe(true);
    });

    it('can project a matrix transform onto a coordinate', function () {
        var matrixCalculation = fallingBlocks.geometry.matrixCalculation,
            // rotate 1 quarter then translate (4, 4)
            matrixDefinition = [   [ 0, -1, -4 ],
                                   [ 1, 0, 4 ],
                                   [ 0, 0, 1 ]  ],
            matrix = fallingBlocks.geometry.transformMatrix(matrixDefinition),
            coordinate = { x: 1, y: 1 },
            result = matrixCalculation.project(coordinate, matrix),
            expectedResult = { x: -5, y: 5 };

        expect(result).toEqual(expectedResult);
    });

});
