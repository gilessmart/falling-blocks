describe('util', function () {
    it('can determine whether two objects are value-equal', function () {
        expect(fallingBlocks.util.areEqual({ x: 1, y: 2 }, { x: 1, y: 2 })).toBe(true);
        expect(fallingBlocks.util.areEqual({ x: 1, y: 2 }, { x: 1, y: 3 })).toBe(false);
    });
});
