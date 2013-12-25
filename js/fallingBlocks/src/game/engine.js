fallingBlocks.game.engine = function (gameState){
    function getTranslatedLocation(location, direction) {
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
                translatedLocation.y += 1;
                break;
        }

        return translatedLocation;
    }

    function canMoveObjectInDirection (direction) {
        var translatedFallingBlockLocations = gameState.fallingBlock.getBlockLocations()
            .map(function (location) {
                return getTranslatedLocation(location, direction);
            });

        return translatedFallingBlockLocations.every(function(translatedFallingBlockLocation){
            return gameState.landedBlocks.isLocationAllowable(translatedFallingBlockLocation)
                && !gameState.landedBlocks.isLocationOccupied(translatedFallingBlockLocation);
        });
    }

    return {
        tryToMoveFallingObject: function (direction) {
            if (canMoveObjectInDirection(direction)) {
                gameState.fallingBlock.move(direction);
                this.onUpdated();
            }
            else if (direction === fallingBlocks.game.directions.down) {
                gameState.landedBlocks.addLocations(gameState.fallingBlock.getBlockLocations());

                var completeRowIndices = gameState.landedBlocks.getCompleteRowIndices();

                if (completeRowIndices > 0) {
                    gameState.landedBlocks.removeRows(completeRowIndices);
                    gameState.score += completeRowIndices.length;
                }

                this.onFallingBlockLanded();
                this.onUpdated();
            }
        },

        tryToRotateFallingObject: function (rotationDirection) {},

        onUpdated: function () {},

        onFallingBlockLanded: function () {}
    }
};
