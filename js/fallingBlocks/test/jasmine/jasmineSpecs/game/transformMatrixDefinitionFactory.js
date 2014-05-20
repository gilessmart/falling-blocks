describe('transformMatrixDefinitionFactory', function () {
    it('creates matrix for 0 quarter turns', function () {
        expect(fallingBlocks.geometry.transformMatrixDefinitionFactory.getQuarterTurns(0))
            .toEqual([
                [ 1, 0, 0 ],
                [ 0, 1, 0],
                [ 0, 0, 1]
            ]);
    });

    it('creates matrix for 1 quarter turn', function () {
        expect(fallingBlocks.geometry.transformMatrixDefinitionFactory.getQuarterTurns(1))
            .toEqual([
                [ 0, -1, 0 ],
                [ 1, 0, 0],
                [ 0, 0, 1]
            ]);
    });

    it('creates matrix for 2 quarter turns', function () {
        expect(fallingBlocks.geometry.transformMatrixDefinitionFactory.getQuarterTurns(2))
            .toEqual([
                [ -1, 0, 0 ],
                [ 0, -1, 0],
                [ 0, 0, 1]
            ]);
    });

    it('creates matrix for 3 quarter turns', function () {
        expect(fallingBlocks.geometry.transformMatrixDefinitionFactory.getQuarterTurns(3))
            .toEqual([
                [ 0, 1, 0 ],
                [ -1, 0, 0],
                [ 0, 0, 1]
            ]);
    });
});
