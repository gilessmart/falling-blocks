describe('transform', function() {

    it('can rotate one quarter turn at a time', function () {
        var transform = fallingBlocks.game.transform(),
            initialLocation = {
                x: 1,
                y: 1
            },
            expectedLocation = {
                x: -1,
                y: 1
            },
            actualLocation;

        transform.rotateQuarterTurns(1);
        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);
    });

    it("can rotate five quarter turns at a time", function () {
        var transform = fallingBlocks.game.transform(),
            initialLocation = {
                x: 1,
                y: 1
            },
            expectedLocation,
            actualLocation;

        transform.rotateQuarterTurns(5);
        expectedLocation = {
            x: -1,
            y: 1
        };
        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);
    });

    it('can translate up & right', function () {
        var transform = fallingBlocks.game.transform(),
            initialLocation = {
                x: 0,
                y: 0
            },
            expectedLocation = {
                x: 4,
                y: 3
            },
            actualLocation;

        transform.translate(4, 3);
        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);
    });

    it('can translate down & left', function () {
        var transform = fallingBlocks.game.transform(),
            initialLocation = {
                x: 0,
                y: 0
            },
            expectedLocation = {
                x: -5,
                y: -5
            },
            actualLocation;

        transform.translate(-5, -5);

        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);
    });

    it('can rotate about an arbitrary point', function () {
        var transform = fallingBlocks.game.transform(),
            initialLocation = {
                x: 10,
                y: 10
            },
            expectedLocation = {
                x: 0,
                y: 0
            },
            actualLocation;

        transform.translate(-5, -5);
        transform.rotateQuarterTurns(2);
        transform.translate(5, 5);

        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);
    });
});
