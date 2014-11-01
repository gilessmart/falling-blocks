var fallingBlocks = fallingBlocks || {};

fallingBlocks.init = function(canvas){
    var inputSource = fallingBlocks.userInput.keyboardAndMouseInputSource(canvas, fallingBlocks.settings.defaultKeyCodes),
        inputListener = fallingBlocks.userInput.inputListener(inputSource);

    fallingBlocks.game( canvas,
                        inputListener,
                        fallingBlocks.settings.defaultGameSettings,
                        fallingBlocks.tetriminoFactory);
};
