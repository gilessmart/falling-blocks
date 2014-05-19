var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.game = function(canvas, inputListener, settings, tetriminoFactory) {
    var clock,
        gameState,
        engine,
        renderer;

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

    return {
        start: function () {
            function spawnTetrimino() {
                gameState.tetrimino = tetriminoFactory.createRandomTetriminoAtTopCentre(
                    settings.tetriminoDefinitions,
                    settings.rows,
                    settings.columns);
            }

            clock = fallingBlocks.game.clock(settings.initialDropInterval, settings.speedUpPercent);
            gameState = {
                landedBlocks: fallingBlocks.game.landedBlocksCollection(settings.columns, settings.rows),
                tetrimino: null,
                score: fallingBlocks.game.score()
            };
            spawnTetrimino();
            engine = fallingBlocks.game.engine(gameState);
            renderer = fallingBlocks.game.renderer(
                canvas.getContext('2d'),
                canvas.offsetWidth,
                canvas.offsetHeight,
                gameState,
                settings.spawnAreaRows,
                settings.colours,
                settings.layout);

            gameState.score.onLevelUp = function () {
                clock.speedUp();
            };

            clock.onTick = function(){
                engine.tryToMoveFallingObject(fallingBlocks.game.directions.down);
            };

            engine.onUpdated = function () {
                renderer.render();
            };

            engine.onTetriminoLanded = function () {
                spawnTetrimino();

                if (gameState.tetrimino.getBlockLocations().some(function (location) {
                    return gameState.landedBlocks.isLocationOccupied(location);
                })) {
                    gameOver();
                }
            };

            engine.onRemoveCompleteRows = function (rowCount) {
                gameState.score.addLines(rowCount);
            };

            gameStart();
            renderer.render();
        }
    };
};
