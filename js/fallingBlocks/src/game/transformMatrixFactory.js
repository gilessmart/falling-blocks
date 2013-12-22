fallingBlocks.game.transformMatrixFactory = {
    getQuarterTurns: function(quarterTurns){
        var definition = fallingBlocks.game.transformMatrixDefinitionFactory.getQuarterTurns(quarterTurns);
        return fallingBlocks.game.transformMatrix(definition);
    },

    getTranslation: function(x, y){
        var definition = fallingBlocks.game.transformMatrixDefinitionFactory.getTranslation(x, y);
        return fallingBlocks.game.transformMatrix(definition);
    },

    getLocation: function(location){
        var definition = fallingBlocks.game.transformMatrixDefinitionFactory.getLocation(location);
        return fallingBlocks.game.transformMatrix(definition);
    },

    getIdentity: function() {
        var definition = fallingBlocks.game.transformMatrixDefinitionFactory.getIdentity();
        return fallingBlocks.game.transformMatrix(definition);
    }
};

