fallingBlocks.game.transformMatrixDefinitionFactory = {
    getQuarterTurns: function(quarterTurns){
        var quarterTurns = quarterTurns % 4;
        return [
            [
                ((quarterTurns + 1) % 2) * (1 - quarterTurns),
                (quarterTurns % 2) * (quarterTurns - 2),
                0
            ],
            [
                (quarterTurns % 2) * (2 - quarterTurns),
                ((quarterTurns + 1) % 2) * (1 - quarterTurns),
                0
            ],
            [
                0,
                0,
                1
            ]
        ];
    },

    getTranslation: function(x, y){
        return [
            [ 1, 0, x ],
            [ 0, 1, y ],
            [ 0, 0, 1 ]
        ];
    },

    getLocation: function(location){
        return [    [ location.x, 0, 0 ],
                    [ location.y, 0, 0 ],
                    [ 1, 0, 0 ] ];
    },

    getIdentity: function(){
        return [    [ 1, 0, 0 ],
                    [ 0, 1, 0 ],
                    [ 0, 0, 1 ] ];
    }
};
