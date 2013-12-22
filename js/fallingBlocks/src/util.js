fallingBlocks.util = {
    getRandomElement: function (arr) {
        return arr[ Math.floor( Math.random() * arr.length ) ];
    },

    areEqual: function(objectA, objectB) {
        if (typeof objectA === typeof objectB) {
            switch (typeof objectA) {
                case 'object':
                    return fallingBlocks.util.areObjectsEqual(objectA, objectB);

                case 'number':
                    return isNaN(objectA) && isNaN(objectB)
                        || objectA === objectB;

                default:
                    return objectA === objectB;
            }
        }

        return false;
    },

    areObjectsEqual: function(objectA, objectB) {
        if (objectA.length === objectB.length) {
            var objectAKeys = Object.keys(objectA);
            return objectAKeys.every(function(key){
                fallingBlocks.util.areEqual(objectA[key], objectA[key]);
            });
        }

        return false;
    }
};

