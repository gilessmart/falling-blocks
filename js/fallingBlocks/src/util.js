var fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.util = {
    getRandomElement: function (arr) {
        return arr[ Math.floor( Math.random() * arr.length ) ];
    },

    areEqual: function(objectA, objectB) {
        if (typeof objectA === typeof objectB) {
            switch (typeof objectA) {
                case 'object':
                    return (function areObjectsEqual () {
                        var objectAKeys = Object.keys(objectA),
                            objectBKeys = Object.keys(objectB);

                        if (objectAKeys.length === objectBKeys.length) {
                            return objectAKeys.every(function (key) {
                                return fallingBlocks.util.areEqual(objectA[key], objectB[key]);
                            });
                        }

                        return false;
                    })();

                case 'number':
                    return isNaN(objectA) && isNaN(objectB)
                        || objectA === objectB;

                default:
                    return objectA === objectB;
            }
        }

        return false;
    },

    /// A modulo operation that handles a negative input value
    mod: function (n, divisor) {
        return ((n % divisor) + divisor) % divisor;
    }
};
