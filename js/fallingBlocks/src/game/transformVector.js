var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.game.transformVector = function (vectorDefinition) {
    var definition = [].concat(vectorDefinition);

    return {
        getElement: function (index) {
            return definition[index];
        },

        getElementCount: function () {
            return definition.length;
        },

        isEqualTo: function (objectVector) {
            var self = this;
            return self.getElementCount() === objectVector.getElementCount() &&
                (function vectorElementsMatch () {
                    var i,
                        elementCount = self.getElementCount();

                    for (i = 0; i < elementCount; i++) {
                        if (self.getElement(i) !== objectVector.getElement(i)) {
                            return false;
                        }
                    }

                    return true;
                })();
        },

        dotProduct: function(otherVector){
            return otherVector.getElement(0) * this.getElement(0)
                + otherVector.getElement(1) * this.getElement(1)
                + otherVector.getElement(2) * this.getElement(2);
        }
    };
};
