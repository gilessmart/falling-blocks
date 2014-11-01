var fallingBlocks = fallingBlocks || {};
fallingBlocks.userInput = fallingBlocks.userInput || {};

fallingBlocks.userInput.inputListener = function (inputSource) {
    return {
        startListening: function () {
            var me = this;

            inputSource.onInput = function (input){
                if (input.direction) {
                    me.onDirection(input.direction);
                }
                else if (input.rotation) {
                    me.onRotation(input.rotation)
                }
                else if (input.pause) {
                    me.onPause()
                }
            };
        },

        stopListening: function () {
            inputSource.onInput = function () {};
        },

        onDirection: function (direction) {},

        onRotation: function (rotation) {},

        onPause: function () {}
    };
};
