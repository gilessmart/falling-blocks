fallingBlocks.game.transformVector = function (vectorDefinition) {
    var definition = [].concat(vectorDefinition);

    return {
        getElement: function(index) {
            return definition[index];
        },

        dotProduct: function(otherVector){
            return otherVector.getElement(0) * this.getElement(0)
                + otherVector.getElement(1) * this.getElement(1)
                + otherVector.getElement(2) * this.getElement(2);
        }
    };
};
