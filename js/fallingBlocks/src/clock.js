var fallingBlocks = fallingBlocks || {};

fallingBlocks.clock = function(initialInterval, speedUpPercent){
    var interval = initialInterval,
        intervalId;

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

        speedUp: function () {
            interval = Math.ceil(interval * (100 - speedUpPercent) / 100);
            this.restart();
        },

        onTick: function () {}
    };
};
