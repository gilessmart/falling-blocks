var fallingBlocks = fallingBlocks || {};
fallingBlocks.geometry = fallingBlocks.geometry || {};

fallingBlocks.geometry.transformMatrixFactory = {
    getQuarterTurns: function(quarterTurns){
        var definition = fallingBlocks.geometry.transformMatrixDefinitionFactory.getQuarterTurns(quarterTurns);
        return fallingBlocks.geometry.transformMatrix(definition);
    },

    getTranslation: function(x, y){
        var definition = fallingBlocks.geometry.transformMatrixDefinitionFactory.getTranslation(x, y);
        return fallingBlocks.geometry.transformMatrix(definition);
    },

    getLocation: function(location){
        var definition = fallingBlocks.geometry.transformMatrixDefinitionFactory.getLocation(location);
        return fallingBlocks.geometry.transformMatrix(definition);
    },

    getIdentity: function() {
        var definition = fallingBlocks.geometry.transformMatrixDefinitionFactory.getIdentity();
        return fallingBlocks.geometry.transformMatrix(definition);
    }
};

