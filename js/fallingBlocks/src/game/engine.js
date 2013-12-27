fallingBlocks.game.engine = function (gameState){
    function areLocationsAvailable(locations) {
        return locations.every(function (location) {
            return gameState.landedBlocks.isLocationAvailable(location);
        });
    }

    function canMoveObjectInDirection (direction) {
        var translatedFallingBlockLocations = gameState.fallingObject.getTranslatedBlockLocations(direction);
        return areLocationsAvailable(translatedFallingBlockLocations);
    }

    function canRotateObjectInDirection(direction) {
        var rotatedFallingBlockLocations = gameState.fallingObject.getRotatedBlockLocations(direction);
        return areLocationsAvailable(rotatedFallingBlockLocations);
    }

    return {
        tryToMoveFallingObject: function (direction) {
            if (canMoveObjectInDirection(direction)) {
                gameState.fallingObject.move(direction);
                this.onUpdated();
            }
            else if (direction === fallingBlocks.game.directions.down) {
                gameState.landedBlocks.addLocations(gameState.fallingObject.getBlockLocations());

                var completeRowIndices = gameState.landedBlocks.getCompleteRowIndices();

                if (completeRowIndices > 0) {
                    gameState.landedBlocks.removeRows(completeRowIndices);
                    gameState.score += completeRowIndices.length;
                }

                this.onFallingBlockLanded();
                this.onUpdated();
            }
        },

        tryToRotateFallingObject: function (rotationDirection) {
            if (canRotateObjectInDirection(rotationDirection)) {
                gameState.fallingObject.rotate(rotationDirection);
                this.onUpdated();
            }
        },

        onUpdated: function () {},

        onFallingBlockLanded: function () {}
    }
};
