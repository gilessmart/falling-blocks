fallingBlocks.game.game = function(canvas, inputListener, settings) {
    var clock = fallingBlocks.game.clock(settings.dropInterval),
        landedBlocks,
        fallingBlock,
        engine,
        renderer;

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

    function createNewFallingBlock() {
        var fallingBlockDefinition = fallingBlocks.util.getRandomElement(settings.fallingBlockDefinitions),
            initialPosition = {
                x: Math.floor(settings.columns / 2),
                y: settings.rows + 2
            };

        return fallingBlocks.game.fallingBlock(fallingBlockDefinition, initialPosition)
    }

    return {
        start: function(){
            landedBlocks = fallingBlocks.game.landedBlocksCollection(settings.columns, settings.rows);
            fallingBlock = createNewFallingBlock();
            engine = fallingBlocks.game.engine(fallingBlock, landedBlocks);
            renderer = fallingBlocks.game.renderer(canvas, fallingBlock, landedBlocks);

            engine.onUpdated = function(){
                renderer.render();
            };

            engine.onGameOver = function(){
                clock.stop();
                inputListener.stopListening();
                renderer.render();
            };

            inputListener.startListening();
            renderer.render();
            clock.start();
        }
    };
};
