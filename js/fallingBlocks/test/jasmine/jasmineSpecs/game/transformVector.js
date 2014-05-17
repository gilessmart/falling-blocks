describe('transformVector', function() {

    it('can count elements in a vector', function () {
        var vectorADefinition = [ 1, 2, 3 ],
            vectorA = fallingBlocks.game.transformVector(vectorADefinition);

        expect(vectorA.getElementCount()).toBe(3);
    });

    it('can identify matching vectors', function () {
        var vectorADefinition = [ 1, 2, 3 ],
            vectorA = fallingBlocks.game.transformVector(vectorADefinition),
            vectorBDefinition = [ 1, 2, 3 ],
            vectorB = fallingBlocks.game.transformVector(vectorBDefinition);

        expect(vectorA.isEqualTo(vectorB)).toBe(true);
    });

    it('can identify non-matching vectors', function () {
        var vectorADefinition = [ 1, 2, 3 ],
            vectorA = fallingBlocks.game.transformVector(vectorADefinition),
            vectorBDefinition = [ 1, 2, 10 ],
            vectorB = fallingBlocks.game.transformVector(vectorBDefinition);

        expect(vectorA.isEqualTo(vectorB)).not.toBe(true);
    });

});
