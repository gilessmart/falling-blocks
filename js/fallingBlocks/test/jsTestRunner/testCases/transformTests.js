TestCase('transformTests', {
    'test hello': function(){
        assertEquals("hello", "hello");
    },

    'test rotate clockwise': function () {
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
        assertEquals(expectedLocation, actualLocation);
    }
});
