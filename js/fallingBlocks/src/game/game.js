var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.game = function(canvas, inputListener, settings) {
    var clock = fallingBlocks.game.clock(settings.dropInterval),
        gameState = {
            landedBlocks: fallingBlocks.game.landedBlocksCollection(settings.columns, settings.rows),
            tetrimino: null,
            score: 0
        },
        engine,
        renderer;

    function spawnFallingObject() {
        var fallingBlockDefinition = fallingBlocks.util.getRandomElement(settings.tetriminoDefinitions),
            initialPosition = {
                x: Math.floor(settings.columns / 2),
                y: settings.rows + fallingBlockDefinition.centreOffset.y
            };

        gameState.tetrimino = fallingBlocks.game.tetrimino(fallingBlockDefinition, initialPosition);
    }

    function gameOver () {
        clock.stop();
        inputListener.stopListening();
    }

    function gameStart () {
        inputListener.startListening();
        clock.start();
    }

    inputListener.onDirection = function(direction){
        if (direction === fallingBlocks.game.directions.down) {
            clock.restart();
        }
        engine.tryToMoveFallingObject(direction);
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
            renderer = fallingBlocks.game.renderer(
                canvas.getContext('2d'),
                canvas.offsetWidth,
                canvas.offsetHeight,
                gameState,
                settings.spawnAreaRows,
                settings.colours);

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
