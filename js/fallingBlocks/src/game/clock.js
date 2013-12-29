var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.clock = function(interval){
    var intervalId,
        running = false;

    return {
        start: function () {
            var me = this;

            intervalId = setInterval(function () {
                me.onTick();
            }, interval);

            running = true;
        },

        stop: function () {
            clearInterval(intervalId);
            running = false;
        },

        isRunning: function () {
            return running;
        },

        onTick: function () {}
    };
};
