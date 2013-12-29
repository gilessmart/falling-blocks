var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.game = function(canvas, inputListener, settings) {
    var clock = fallingBlocks.game.clock(settings.dropInterval),
        gameState = {
            landedBlocks: fallingBlocks.game.landedBlocksCollection(settings.columns, settings.rows),
            fallingObject: null,
            score: 0
        },
        engine,
        renderer;

    function spawnFallingObject() {
        var fallingBlockDefinition = fallingBlocks.util.getRandomElement(settings.fallingBlockDefinitions),
            initialPosition = {
                x: Math.floor(settings.columns / 2),
                y: settings.rows + fallingBlockDefinition.centreOffset.y
            };

        gameState.fallingObject = fallingBlocks.game.fallingObject(fallingBlockDefinition, initialPosition);
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
        if (direction === fallingBlocks.game.directions.down) {
            clock.stop();
        }
        engine.tryToMoveFallingObject(direction);
    };

    inputListener.onDirectionRepeat = function(direction){
        engine.tryToMoveFallingObject(direction);
    };

    inputListener.onDirectionComplete = function() {
        if (!clock.isRunning()) {
            clock.start();
        }
    };

    inputListener.onRotation = function(rotationDirection){
        engine.tryToRotateFallingObject(rotationDirection);
    };

    clock.onTick = function(){
        engine.tryToMoveFallingObject(fallingBlocks.game.directions.down);
    };

    return {
        start: function () {
            spawnFallingObject();
            engine = fallingBlocks.game.engine(gameState);
            renderer = fallingBlocks.game.renderer(canvas, gameState);

            engine.onUpdated = function () {
                renderer.render();
            };

            engine.onFallingBlockLanded = function () {
                if (gameState.landedBlocks.isHighestBlockAbovePlayingArea()) {
                    gameOver();
                }
                else {
                    spawnFallingObject();
                }
            };

            gameStart();
            renderer.render();
        }
    };
};
