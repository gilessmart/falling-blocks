var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.keyboradInputSource = function(container, keyCodes){
    var me = {
        onInput: function(input){}
    };

    container.addEventListener('keydown', function(e){
        var key = e.keyCode || e.which,
            input;

        switch (key) {
            case keyCodes.moveLeft:
                input = {
                    direction: fallingBlocks.game.directions.left
                };
                break;

            case keyCodes.moveRight:
                input = {
                    direction: fallingBlocks.game.directions.right
                };
                break;

            case keyCodes.moveDown:
                input = {
                    direction: fallingBlocks.game.directions.down
                };
                break;

            case keyCodes.rotateClockwise:
                input = {
                    rotation: fallingBlocks.game.rotations.clockwise
                };
                break;

            case keyCodes.rotateAntiClockwise:
                input = {
                    rotation: fallingBlocks.game.rotations.anticlockwise
                };
                break;
        }

        if (input)
            me.onInput(input);
    });

    return me;
};
