(function () {
    var myCanvas = document.getElementById('MyCanvas'),
        inputSource = fallingBlocks.userInput.keyboardInputSource(myCanvas, fallingBlocks.settings.defaultKeyCodes),
        inputListener = fallingBlocks.userInput.inputListener(inputSource);

    fallingBlocks.game( myCanvas,
                        inputListener,
                        fallingBlocks.settings.defaultGameSettings,
                        fallingBlocks.tetriminoFactory);
})();
