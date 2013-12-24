fallingBlocks.game.game = function(canvas, inputListener, settings) {
    var clock = fallingBlocks.game.clock(settings.dropInterval),
        gameState = {
            landedBlocks: fallingBlocks.game.landedBlocksCollection(settings.columns, settings.rows),
            fallingBlock: spawnFallingBlock()
        },
        engine,
        renderer;

    function spawnFallingBlock() {
        var fallingBlockDefinition = fallingBlocks.util.getRandomElement(settings.fallingBlockDefinitions),
            initialPosition = {
                x: Math.floor(settings.columns / 2),
                y: fallingBlockDefinition.centreOffset.y * -1
            };

        return fallingBlocks.game.fallingBlock(fallingBlockDefinition, initialPosition);
    }

    function gameOver () {
        clock.stop();
        inputListener.stopListening();
    }

    function gameStart () {
        inputListener.startListening();
        clock.start();
    }

    inputListener.onDirectionStart = function(direction){
        clock.stop();
        engine.tryToMoveFallingObject(direction);
    };

    inputListener.onDirectionRepeat = function(direction){
        engine.tryToMoveFallingObject(direction);
    };

    inputListener.onDirectionComplete = function() {
        clock.start();
    };

    inputListener.onRotation = function(rotationDirection){
        engine.tryToRotateFallingObject(rotationDirection);
    };

    clock.onTick = function(){
        engine.tryToMoveFallingObject(fallingBlocks.game.directions.down);
    };

    return {
        start: function(){
            engine = fallingBlocks.game.engine(gameState);
            renderer = fallingBlocks.game.renderer(canvas, gameState);

            engine.onUpdated = function(){
                renderer.render();
            };

            engine.onFallingBlockLanded = function(){
                if (gameState.landedBlocks.isHighestBlockAbovePlayingArea()) {
                    gameOver();
                    renderer.render();
                }
                else {
                    gameState.fallingBlock = spawnFallingBlock();
                }
            };

            gameStart();
            renderer.render();
        }
    };
};
