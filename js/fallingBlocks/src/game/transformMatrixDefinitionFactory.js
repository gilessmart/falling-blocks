fallingBlocks.game.transformMatrixDefinitionFactory = {
    getQuarterTurns: function (quarterTurns) {
        switch (fallingBlocks.util.mod(quarterTurns, 4)) {
            case 0:
                return [
                    [ 1, 0, 0 ],
                    [ 0, 1, 0 ],
                    [ 0, 0, 1 ]
                ];

            case 1:
                return [
                    [ 0, -1, 0 ],
                    [ 1, 0, 0 ],
                    [ 0, 0, 1 ]
                ];

            case 2:
                return [
                    [ -1, 0, 0 ],
                    [ 0, -1, 0 ],
                    [ 0, 0, 1 ]
                ];

            case 3:
                return [
                    [ 0, 1, 0 ],
                    [ -1, 0, 0 ],
                    [ 0, 0, 1 ]
                ];
        }
    },

    getTranslation: function(x, y){
        return [
            [ 1, 0, x ],
            [ 0, 1, y ],
            [ 0, 0, 1 ]
        ];
    },

    getLocation: function(location){
        return [
            [ location.x, 0, 0 ],
            [ location.y, 0, 0 ],
            [ 1, 0, 0 ]
        ];
    },

    getIdentity: function(){
        return [
            [ 1, 0, 0 ],
            [ 0, 1, 0 ],
            [ 0, 0, 1 ]
        ];
    }
};
