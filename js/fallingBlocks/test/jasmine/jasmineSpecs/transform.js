describe("Transform", function() {

    it("test the test", function() {
        var transform = fallingBlocks.game.transform(),
            initialLocation = {
                x: 1,
                y: 1
            },
            expectedLocation,
            actualLocation;

        transform.rotateQuarterTurns(1);
        expectedLocation = {
            x: 1,
            y: -1
        };

        actualLocation = transform.getTransformedLocation(initialLocation);
        expect(actualLocation).toEqual(expectedLocation);
    });

});