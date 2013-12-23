describe("Transform", function() {

    it("Can rotate one quarter turn at a time", function() {
        var transform = fallingBlocks.game.transform(),
            initialLocation = {
                x: 1,
                y: 1
            },
            expectedLocation,
            actualLocation;

        transform.rotateQuarterTurns(1);
        expectedLocation = {
            x: -1,
            y: 1
        };
        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);

        transform.rotateQuarterTurns(1);
        expectedLocation = {
            x: -1,
            y: -1
        };
        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);

        transform.rotateQuarterTurns(1);
        expectedLocation = {
            x: 1,
            y: -1
        };
        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);

        transform.rotateQuarterTurns(1);
        expectedLocation = {
            x: 1,
            y: 1
        };
        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);
    });

    it("Can rotate two quarter turns at a time", function() {
        var transform = fallingBlocks.game.transform(),
            initialLocation = {
                x: 1,
                y: 1
            },
            expectedLocation,
            actualLocation;

        transform.rotateQuarterTurns(2);
        expectedLocation = {
            x: -1,
            y: -1
        };
        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);

        transform.rotateQuarterTurns(2);
        expectedLocation = {
            x: 1,
            y: 1
        };
        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);
    });
});
