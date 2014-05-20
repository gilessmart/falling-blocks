describe('score', function () {
    it('retrieves initial scores', function () {
        var score = fallingBlocks.score();

        expect(score.lines).toBe(0);
        expect(score.points).toBe(0);
        expect(score.level).toBe(0);
    });

    it('retrieves scores after 1 line', function () {
        var score = fallingBlocks.score();

        score.addLines(1);

        expect(score.lines).toBe(1);
        expect(score.points).toBe(40);
        expect(score.level).toBe(0);
    });

    it('retrieves scores after 3 lines', function () {
        var score = fallingBlocks.score();

        score.addLines(3);

        expect(score.lines).toBe(3);
        expect(score.points).toBe(300);
        expect(score.level).toBe(0);
    });

    it('retrieves scores after 3 * 4 lines', function () {
        var score = fallingBlocks.score();

        score.addLines(4);
        score.addLines(4);
        score.addLines(4);

        expect(score.lines).toBe(12);
        expect(score.points).toBe(3600);
        expect(score.level).toBe(1);
    });
});
