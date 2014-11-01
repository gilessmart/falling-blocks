var fallingBlocks = fallingBlocks || {};

fallingBlocks.game = function(canvas, inputListener, settings, tetriminoFactory) {
    var clock,
        gameState,
        engine,
        renderer;

    clock = fallingBlocks.clock(settings.initialDropInterval, settings.speedUpPercent);
    gameState = {
        landedBlocks: null,
        tetrimino: null,
        score: fallingBlocks.score(),
        state: fallingBlocks.states.ready
    };
    engine = fallingBlocks.engine(gameState);
    renderer = fallingBlocks.rendering.renderer(
        canvas.getContext('2d'),
        settings.rows,
        settings.columns,
        canvas.offsetWidth,
        canvas.offsetHeight,
        gameState,
        settings.colours,
        settings.layout,
        settings.notificationMessages);

    function spawnTetrimino() {
        gameState.tetrimino = tetriminoFactory.createRandomTetriminoAtTopCentre(
            settings.tetriminoDefinitions,
            settings.rows,
            settings.columns);
    }

    function gameOver () {
        gameState.state = fallingBlocks.states.gameOver;
        clock.stop();
        renderer.render();
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
            renderer.render();
        }
        else if (gameState.state === fallingBlocks.states.paused) {
            gameState.state = fallingBlocks.states.playing;
            clock.start();
            renderer.render();
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
        if (gameState.state === fallingBlocks.states.ready ||
            gameState.state === fallingBlocks.states.gameOver) {
            spawnTetrimino();
            gameState.state = fallingBlocks.states.playing;
            gameState.landedBlocks = fallingBlocks.landedBlocksCollection(settings.columns, settings.rows);
            gameState.score.reset();
            clock.start();
            renderer.render();
        }
    };
};
