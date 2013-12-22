fallingBlocks.keyboradInputSource = function(container, keyCodes){
    var me = {
        onInputStart: function(input){},
        onInputEnd: function(input){}
    };

    container.addEventListener('keydown', function(e){
        var key = e.keyCode || e.which,
            input;

        switch (key) {
            case keyCodes.left:
                input = {
                    direction: fallingBlocks.game.direction.left
                };
                break;

            case keyCodes.right:
                input = {
                    direction: fallingBlocks.game.direction.right
                };
                break;

            case keyCodes.down:
                input = {
                    direction: fallingBlocks.game.direction.down
                };
                break;

            case keyCodes.rotateClockwise:
                input = {
                    rotation: fallingBlocks.game.rotations.clockwise
                };
                break;

            case keyCodes.rotateAntiClockwise:
                input = {
                    rotation: fallingBlocks.game.direction.anticlockwise
                };
                break;
        }

        if (input)
            me.onInputStart(input);
    });

    container.addEventListener('keyup', function(e){
        var key = e.keyCode || e.which,
            input;

        switch (key) {
            case keyCodes.left:
                input = {
                    direction: fallingBlocks.game.direction.left
                };
                break;

            case keyCodes.right:
                input = {
                    direction: fallingBlocks.game.direction.right
                };
                break;

            case keyCodes.down:
                input = {
                    direction: fallingBlocks.game.direction.down
                };
                break;
        }

        if (input)
            me.onInputEnd(input);
    });

    return me;
};
