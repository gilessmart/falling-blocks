describe('util', function () {
    it('can determine whether two objects are value-equal', function () {
        expect(fallingBlocks.util.areEqual({ x: 1, y: 2 }, { x: 1, y: 2 })).toBe(true);
        expect(fallingBlocks.util.areEqual({ x: 1, y: 2 }, { x: 1, y: 3 })).toBe(false);
    });

    it('can calculate modulo of positive numbers', function () {
        expect(fallingBlocks.util.mod(0, 4)).toBe(0);
        expect(fallingBlocks.util.mod(1, 4)).toBe(1);
        expect(fallingBlocks.util.mod(2, 4)).toBe(2);
        expect(fallingBlocks.util.mod(3, 4)).toBe(3);
        expect(fallingBlocks.util.mod(4, 4)).toBe(0);
        expect(fallingBlocks.util.mod(5, 4)).toBe(1);
    });

    it('can calculate modulo of negative numbers', function () {
        expect(fallingBlocks.util.mod(-0, 4)).toBe(0);
        expect(fallingBlocks.util.mod(-1, 4)).toBe(3);
        expect(fallingBlocks.util.mod(-2, 4)).toBe(2);
        expect(fallingBlocks.util.mod(-3, 4)).toBe(1);
        expect(fallingBlocks.util.mod(-4, 4)).toBe(0);
        expect(fallingBlocks.util.mod(-5, 4)).toBe(3);
    })
});
