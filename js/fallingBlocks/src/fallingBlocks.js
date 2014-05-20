var fallingBlocks = fallingBlocks || {};

fallingBlocks.fallingBlocks = function(canvas, keyCodes, gameSettings){
    var inputSource = fallingBlocks.userInput.keyboardInputSource(canvas, keyCodes),
        inputListener = fallingBlocks.userInput.inputListener(inputSource),
        tetriminoFactory = fallingBlocks.tetriminoFactory,
        game = fallingBlocks.game(canvas, inputListener, gameSettings, tetriminoFactory);

    game.start();
};
