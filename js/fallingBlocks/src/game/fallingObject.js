fallingBlocks.game.fallingObject = function (definition, initialCentreLocation) {
    var quarterTurns = 0,
        centreLocation = initialCentreLocation;

    return {
        getBlockLocations: function () {
            var transform = fallingBlocks.game.transform();

            transform.translate(centreLocation.x, centreLocation.y);
            transform.rotateQuarterTurns(quarterTurns);
            transform.translate(definition.centreOffset.x, definition.centreOffset.y);

            return definition.blockOffsets.map(function (offset) {
                return transform.getTransformedLocation(offset);
            });
        },

        move: function (direction) {
            switch (direction) {
                case fallingBlocks.game.directions.left:
                    centreLocation.x -= 1;
                    break;

                case fallingBlocks.game.directions.right:
                    centreLocation.x += 1;
                    break;

                case fallingBlocks.game.directions.down:
                    centreLocation.y += 1;
                    break;
            }
        },

        rotate: function (rotationDirection) {
            switch (rotationDirection) {
                case fallingBlocks.game.rotations.anticlockwise:
                    quarterTurns += 1;
                    break;

                case fallingBlocks.game.rotations.clockwise:
                    quarterTurns -= 1;
                    break;
            }
        }
    };
};
