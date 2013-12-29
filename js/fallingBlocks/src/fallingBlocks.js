var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.fallingBlocks = function(canvas, keyCodes, gameSettings){
    var inputSource = fallingBlocks.keyboardInputSource(canvas, keyCodes),
        inputListener = new fallingBlocks.game.inputListener(inputSource),
        game = fallingBlocks.game.game(cavas, inputListener, gameSettings);

    game.start();
};
