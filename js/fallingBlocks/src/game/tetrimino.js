var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.tetrimino = function (definition, initialCentreLocation) {
    var quarterTurns = 0,
        centreLocation = initialCentreLocation;

    function getRotatedRelativeOffsets () {
        var transform = fallingBlocks.game.transform();

        // translate centre offset to origin
        transform.translate(definition.centreOffset.x * -1, definition.centreOffset.y * -1);

        transform.rotateQuarterTurns(quarterTurns);

        return definition.blockOffsets.map(function (offset) {
            return transform.getTransformedLocation(offset);
        });
    }

    return {
        getBlockLocations: function () {
            return getRotatedRelativeOffsets().map(function (offset) {
                return {
                    x: offset.x + centreLocation.x,
                    y: offset.y + centreLocation.y
                };
            });
        },

        getTranslatedBlockLocations: function(direction) {
            return this.getBlockLocations().map(function(location){
                var translatedLocation = {
                    x: location.x,
                    y: location.y
                };

                switch(direction) {
                    case fallingBlocks.game.directions.left:
                        translatedLocation.x -= 1;
                        break;

                    case fallingBlocks.game.directions.right:
                        translatedLocation.x += 1;
                        break;

                    case fallingBlocks.game.directions.down:
                        translatedLocation.y -= 1;
                        break;
                }

                return translatedLocation;
            });
        },

        getRotatedBlockLocations: function (direction) {
            var transform = fallingBlocks.game.transform();

            switch(direction) {
                case fallingBlocks.game.rotations.anticlockwise:
                    transform.rotateQuarterTurns(1);
                    break;

                case fallingBlocks.game.rotations.clockwise:
                    transform.rotateQuarterTurns(-1);
                    break;
            }

            return getRotatedRelativeOffsets().map(function (offset) {
                var rotatedOffset = transform.getTransformedLocation(offset);
                return {
                    x: rotatedOffset.x + centreLocation.x,
                    y: rotatedOffset.y + centreLocation.y
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
