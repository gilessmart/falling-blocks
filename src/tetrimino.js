var fallingBlocks = fallingBlocks || {};

fallingBlocks.tetrimino = function (definition, initialLocation) {
    var relativeTransform = fallingBlocks.geometry.transform(),
        locationTransform = fallingBlocks.geometry.transform();

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
            var transform = fallingBlocks.geometry.transform();

            switch(direction) {
                case fallingBlocks.directions.left:
                    transform.translate(-1, 0);
                    break;

                case fallingBlocks.directions.right:
                    transform.translate(1, 0);
                    break;

                case fallingBlocks.directions.down:
                    transform.translate(0, -1);
                    break;
            }

            return getTransformedBlockLocations(transform);
        },

        getRotatedBlockLocations: function (direction) {
            var transform = fallingBlocks.geometry.transform(),
                quarterTurns = 0;

            switch(direction) {
                case fallingBlocks.rotations.anticlockwise:
                    quarterTurns = 1;
                    break;

                case fallingBlocks.rotations.clockwise:
                    quarterTurns = -1;
                    break;
            }

            transform.rotateQuarterTurnsAboutPoint(quarterTurns, definition.rotationOffset);
            return getTransformedBlockLocations(transform);
        },

        move: function (direction) {
            switch (direction) {
                case fallingBlocks.directions.left:
                    locationTransform.translate(-1, 0);
                    break;

                case fallingBlocks.directions.right:
                    locationTransform.translate(1, 0);
                    break;

                case fallingBlocks.directions.down:
                    locationTransform.translate(0, -1);
                    break;
            }
        },

        rotate: function (rotationDirection) {
            switch (rotationDirection) {
                case fallingBlocks.rotations.anticlockwise:
                    relativeTransform.rotateQuarterTurnsAboutPoint(1, definition.rotationOffset);
                    break;

                case fallingBlocks.rotations.clockwise:
                    relativeTransform.rotateQuarterTurnsAboutPoint(-1, definition.rotationOffset);
                    break;
            }
        }
    };
};
