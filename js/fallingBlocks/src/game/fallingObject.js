fallingBlocks.game.fallingObject = function (definition, initialCentreLocation) {
    var quarterTurns = 0,
        centreLocation = initialCentreLocation;

    function getTranslatedOffsets () {
        var transform = fallingBlocks.game.transform();

        // translate centre offset to origin
        transform.translate(definition.centreOffset.x * -1, definition.centreOffset.y * -1);
        // rotate
        transform.rotateQuarterTurns(quarterTurns);

        return definition.blockOffsets.map(function (offset) {
            return transform.getTransformedLocation(offset);
        });
    }

    return {
        getBlockLocations: function () {
            return getTranslatedOffsets().map(function (offset) {
                return {
                    x: offset.x + centreLocation.x,
                    y: offset.y + centreLocation.y
                };
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
