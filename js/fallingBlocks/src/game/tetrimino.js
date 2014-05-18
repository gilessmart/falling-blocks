var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.tetrimino = function (definition, initialLocation) {
    var relativeTransform = fallingBlocks.game.transform(),
        locationTransform = fallingBlocks.game.transform();

    // initialise the location transform
    locationTransform.translate(initialLocation.x, initialLocation.y);

    function getRotatedRelativeOffsets () {
        return definition.blockOffsets.map(function (offset) {
            return relativeTransform.getTransformedLocation(offset);
        });
    }

    function getTransformedBlockLocations (transform) {
        return getRotatedRelativeOffsets().map(function (offset) {
            var translatedOffset = transform.getTransformedLocation(offset);
            return locationTransform.getTransformedLocation(translatedOffset);
        });
    }

    return {
        getBlockLocations: function () {
            return getRotatedRelativeOffsets().map(function (offset) {
                return locationTransform.getTransformedLocation(offset);
            });
        },

        getTranslatedBlockLocations: function (direction) {
            var transform = fallingBlocks.game.transform();

            switch(direction) {
                case fallingBlocks.game.directions.left:
                    transform.translate(-1, 0);
                    break;

                case fallingBlocks.game.directions.right:
                    transform.translate(1, 0);
                    break;

                case fallingBlocks.game.directions.down:
                    transform.translate(0, -1);
                    break;
            }

            return getTransformedBlockLocations(transform);
        },

        getRotatedBlockLocations: function (direction) {
            var transform = fallingBlocks.game.transform(),
                quarterTurns = 0;

            switch(direction) {
                case fallingBlocks.game.rotations.anticlockwise:
                    quarterTurns = 1;
                    break;

                case fallingBlocks.game.rotations.clockwise:
                    quarterTurns = -1;
                    break;
            }

            transform.rotateQuarterTurnsAboutPoint(quarterTurns, definition.rotationOffset);
            return getTransformedBlockLocations(transform);
        },

        move: function (direction) {
            switch (direction) {
                case fallingBlocks.game.directions.left:
                    locationTransform.translate(-1, 0);
                    break;

                case fallingBlocks.game.directions.right:
                    locationTransform.translate(1, 0);
                    break;

                case fallingBlocks.game.directions.down:
                    locationTransform.translate(0, -1);
                    break;
            }
        },

        rotate: function (rotationDirection) {
            switch (rotationDirection) {
                case fallingBlocks.game.rotations.anticlockwise:
                    relativeTransform.rotateQuarterTurnsAboutPoint(1, definition.rotationOffset);
                    break;

                case fallingBlocks.game.rotations.clockwise:
                    relativeTransform.rotateQuarterTurnsAboutPoint(-1, definition.rotationOffset);
                    break;
            }
        }
    };
};
