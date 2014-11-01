var fallingBlocks = fallingBlocks || {};

fallingBlocks.engine = function (gameState){
    function areLocationsAvailable (locations) {
        return locations.every(function (location) {
            return gameState.landedBlocks.isLocationAvailable(location);
        });
    }

    function canMoveObjectInDirection (direction) {
        var translatedFallingBlockLocations = gameState.tetrimino.getTranslatedBlockLocations(direction);
        return areLocationsAvailable(translatedFallingBlockLocations);
    }

    function canRotateObjectInDirection (direction) {
        var rotatedFallingBlockLocations = gameState.tetrimino.getRotatedBlockLocations(direction);
        return areLocationsAvailable(rotatedFallingBlockLocations);
    }

    function removeCompleteRows() {
        var completeRowIndices = gameState.landedBlocks.getCompleteRowIndices();
        if (completeRowIndices.length > 0) {
            gameState.landedBlocks.removeRows(completeRowIndices);
        }

        this.onRemoveCompleteRows(completeRowIndices.length);
    }

    function landTetrimino() {
        gameState.landedBlocks.addLocations(gameState.tetrimino.getBlockLocations());
        removeCompleteRows.call(this);
        this.onTetriminoLanded();
    }

    return {
        tryToMoveFallingObject: function (direction) {
            if (canMoveObjectInDirection(direction)) {
                gameState.tetrimino.move(direction);
                this.onUpdated();
            }
            else if (direction === fallingBlocks.directions.down) {
                landTetrimino.call(this);
                this.onUpdated();
            }
        },

        tryToRotateFallingObject: function (rotationDirection) {
            if (canRotateObjectInDirection(rotationDirection)) {
                gameState.tetrimino.rotate(rotationDirection);
                this.onUpdated();
            }
        },

        onUpdated: function () {},

        onTetriminoLanded: function () {},

        onRemoveCompleteRows: function (rowCount) {}
    }
};
