var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.fallingBlocks = function(canvas, keyCodes, gameSettings){
    var inputSource = fallingBlocks.keyboardInputSource(canvas, keyCodes),
        inputListener = fallingBlocks.game.inputListener(inputSource),
        tetriminoFactory = fallingBlocks.game.tetriminoFactory,
        game = fallingBlocks.game.game(canvas, inputListener, gameSettings, tetriminoFactory);

    game.start();
};
