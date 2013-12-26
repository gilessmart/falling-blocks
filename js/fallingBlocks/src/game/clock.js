fallingBlocks.game.clock = function(interval){
    var intervalId;

    return {
        start: function () {
            var me = this;

            intervalId = setInterval(function () {
                me.onTick();
            }, interval);
        },

        stop: function () {
            clearInterval(intervalId);
        },

        onTick: function () {}
    };
};
