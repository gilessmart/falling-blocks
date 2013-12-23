fallingBlocks.game.engine = function(fallingBlock, landedBlocks){
    return {
        tryToMoveFallingObject: function(direction){
            if (direction === fallingBlock.game.directions.down
                && fallingBlockCanLand()) {
                landFallingBlock();

                var completeRowNumbers = landedBlocks.getCompleteRowNumbers()

                if (completeRowNumbers > 0) {
                    landedBlocks.removeRows(completeRowNumbers);
                    this.onCompleteRowsRemoved(completeRowNumbers.length);
                }

                if (landedBlocks.currentHeight > heightLimit) {
                    this.onGameOver();
                    return;
                }
                else {
                    // create new fallingObject
                }

                // move object down
            }

            // if direction is left or right
                // check if we can move left or right
        },

        tryToRotateFallingObject: function(rotationDirection){},

        onUpdated: function(){},

        onGameOver: function(){},

        onCompleteRowsRemoved: function(rows){}
    }
};
