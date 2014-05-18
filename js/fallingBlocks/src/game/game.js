var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.game = function(canvas, inputListener, settings, tetriminoFactory) {
    var clock = fallingBlocks.game.clock(settings.dropInterval),
        gameState = {
            landedBlocks: fallingBlocks.game.landedBlocksCollection(settings.columns, settings.rows),
            tetrimino: null,
            score: 0
        },
        engine,
        renderer;

    function spawnTetrimino() {
        gameState.tetrimino = tetriminoFactory.createRandomTetriminoAtTopCentre(
            settings.tetriminoDefinitions,
            settings.rows,
            settings.columns);
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
                // TODO - implement score object, call current score 'points'
                gameState.score += rowCount;
            };

            gameStart();
            renderer.render();
        }
    };
};
