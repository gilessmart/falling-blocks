fallingBlocks.game.fallingObject = function (definition, initialCentreLocation) {
    var quarterTurns = 0,
        centreLocation = initialCentreLocation;

    return {
        getBlockLocations: function () {
            return definition.blockOffsets.map(function (offset) {
                var transform = fallingBlocks.game.transform(),
                    relativeOffset = {
                        x: 0 - definition.centreOffset.x,
                        y: 0 - definition.centreOffset.y
                    };

                // move to centre location
                transform.translate(centreLocation.x - definition.centreOffset.x, centreLocation.y - definition.centreOffset.y);
                // rotate
                transform.rotateQuarterTurns(quarterTurns);
                // move by offset relative to centre offset
                //transform.translate(relativeOffset.x, relativeOffset.y);

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
                    centreLocation.y -= 1;
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
