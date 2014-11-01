var fallingBlocks = fallingBlocks || {};
fallingBlocks.userInput = fallingBlocks.userInput || {};

fallingBlocks.userInput.keyboardInputSource = function(container, keyCodes){
    var me = {
        onInput: function(input){}
    };

    container.addEventListener('keydown', function(e){
        var key = e.keyCode || e.which,
            input;

        switch (key) {
            case keyCodes.moveLeft:
                input = {
                    direction: fallingBlocks.directions.left
                };
                break;

            case keyCodes.moveRight:
                input = {
                    direction: fallingBlocks.directions.right
                };
                break;

            case keyCodes.moveDown:
                input = {
                    direction: fallingBlocks.directions.down
                };
                break;

            case keyCodes.rotateClockwise:
                input = {
                    rotation: fallingBlocks.rotations.clockwise
                };
                break;

            case keyCodes.rotateAntiClockwise:
                input = {
                    rotation: fallingBlocks.rotations.anticlockwise
                };
                break;

            case keyCodes.pause:
                input = {
                    pause: true
                };
                break;
        }

        if (input)
            me.onInput(input);
    });

    return me;
};
