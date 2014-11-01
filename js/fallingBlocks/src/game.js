var fallingBlocks = fallingBlocks || {};

fallingBlocks.game = function(canvas, inputListener, settings, tetriminoFactory) {
    var clock,
        gameState,
        engine,
        renderer;

    clock = fallingBlocks.clock(settings.initialDropInterval, settings.speedUpPercent);
    gameState = {
        landedBlocks: fallingBlocks.landedBlocksCollection(settings.columns, settings.rows),
        tetrimino: null,
        score: fallingBlocks.score(),
        state: fallingBlocks.states.ready
    };
    engine = fallingBlocks.engine(gameState);
    renderer = fallingBlocks.rendering.renderer(
        canvas.getContext('2d'),
        canvas.offsetWidth,
        canvas.offsetHeight,
        gameState,
        settings.colours,
        settings.layout);

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

    inputListener.onDirection = function(direction) {
        if (gameState.state === fallingBlocks.states.playing) {
            if (direction === fallingBlocks.directions.down) {
                clock.restart();
            }
            engine.tryToMoveFallingObject(direction);
        }
    };

    inputListener.onRotation = function(rotationDirection){
        if (gameState.state === fallingBlocks.states.playing) {
            engine.tryToRotateFallingObject(rotationDirection);
        }
    };

    inputListener.onPause = function () {
        if (gameState.state === fallingBlocks.states.playing) {
            gameState.state = fallingBlocks.states.paused;
            clock.stop();
        }
        else if (gameState.state === fallingBlocks.states.paused) {
            gameState.state = fallingBlocks.states.playing;
            clock.start();
        }
    };

    gameState.score.onLevelUp = function () {
        clock.speedUp();
    };

    clock.onTick = function(){
        engine.tryToMoveFallingObject(fallingBlocks.directions.down);
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

    inputListener.startListening();
    renderer.render();

    inputListener.onClick = function () {
        if (gameState.state === fallingBlocks.states.ready) {
            spawnTetrimino();
            gameState.state = fallingBlocks.states.playing;
            clock.start();
            renderer.render();
        }
    };
};
