fallingBlocks.game.fallingBlock = function (definition, location) {
    var quarterTurns = 0;

    function getRotatedOffset(offsetLocation) {
        // get offsetLocation rotated by theta around definition.centreOffset
        var transform = fallingBlocks.game.transform(),
            reversedCentreOffset = {
                x: definition.centreOffset.x * -1,
                y: definition.centreOffset.y * -1
            };

        transform.translate(reversedCentreOffset);
        transform.rotateQuarterTurns(quarterTurns);
        transform.translate(definition.centreOffset);

        return transform.getTransformedLocation(offsetLocation);
    }

    return {
        // todo -  depends on how engine wants to test whether a block can rotate
        rotate: function () {},
        canRotate: function () {},

        getBlockLocations: function () {
            return definition.blockLocations
                .map(function (offset) {
                    var rotatedOffset = getRotatedOffset(offset);
                    return {
                        x: location.x + rotatedOffset.x,
                        y: location.y + rotatedOffset.y
                    };
                });
        },

        move: function (direction) {
            switch (direction) {
            case fallingBlocks.game.directions.left:
                location.x -= 1;
                break;

            case fallingBlocks.game.directions.right:
                location.x += 1;
                break;

            case fallingBlocks.game.directions.down:
                location.y += 1;
                break;
            }
        }
    };
};
