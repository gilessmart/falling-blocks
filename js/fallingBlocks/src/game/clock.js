var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

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

        restart: function () {
            this.stop();
            this.start();
        },

        onTick: function () {}
    };
};
