fallingBlocks.game.inputListener = function(inputSource, repeatInterval){
    var repeatIntervalId;

    return {
        startListening: function(){
            var me = this;

            inputSource.onInputStart = function(input){
                clearInterval(repeatIntervalId);

                if (input.direction) {
                    me.onDirectionStart(input.direction);

                    repeatIntervalId = setInterval(function(){
                        me.onDirectionStart(input.direction);
                    }, repeatInterval);
                }
                else if (input.rotation){
                    me.onRotation(input.rotation)
                }
            };

            inputSource.onInputEnd = function(){
                clearInterval(repeatIntervalId);
                me.onDirectionComplete();
            };
        },

        stopListening: function(){
            clearInterval(repeatIntervalId);
            inputSource.onInput = function(){};
            inputSource.onInputEnd = function(){};
        },

        onDirectionStart: function(direction){},

        onDirectionRepeat: function(direction){},

        onDirectionComplete: function(){},

        onRotation: function(rotation){}
    };
};
