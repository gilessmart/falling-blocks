describe('engine', function () {
    var fallObjectDefinition,
        initialCentreLocation,
        fallingObject,
        landedBlocksCollection,
        gameState,
        engine;

    beforeEach(function () {
        fallObjectDefinition = {
            centreOffset: { x: 0, y: 0 },
            blockOffsets: [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 }
            ]
        };
        initialCentreLocation = { x: 2, y: 0 };
        fallingObject = fallingBlocks.game.tetrimino(fallObjectDefinition, initialCentreLocation);
        landedBlocksCollection = fallingBlocks.game.landedBlocksCollection(5, 4);
        gameState = {
            landedBlocks: landedBlocksCollection,
            tetrimino: fallingObject,
            score: 0
        };
        engine = fallingBlocks.game.engine(gameState);
    });

    it('rotates the falling object if there is room', function () {
        spyOn(fallingObject, 'rotate');
        spyOn(engine, 'onUpdated');

        engine.tryToRotateFallingObject(fallingBlocks.game.rotations.anticlockwise);

        expect(fallingObject.rotate).toHaveBeenCalledWith(fallingBlocks.game.rotations.anticlockwise);
        expect(engine.onUpdated).toHaveBeenCalled();
    });

    it('does not rotate the falling object if there is not room', function () {
        spyOn(fallingObject, 'rotate');
        spyOn(engine, 'onUpdated');

        engine.tryToRotateFallingObject(fallingBlocks.game.rotations.clockwise);

        expect(fallingObject.rotate).not.toHaveBeenCalled();
        expect(engine.onUpdated).not.toHaveBeenCalled();
    });

    it('moves the falling object if there is room', function () {
        spyOn(fallingObject, 'move');
        spyOn(engine, 'onUpdated');

        engine.tryToMoveFallingObject(fallingBlocks.game.directions.left);

        expect(engine.onUpdated).toHaveBeenCalled();
        expect(fallingObject.move).toHaveBeenCalledWith(fallingBlocks.game.directions.left);
    });

    it('does not move the falling object if there is not room', function () {
        spyOn(fallingObject, 'move');
        spyOn(engine, 'onUpdated');

        engine.tryToMoveFallingObject(fallingBlocks.game.directions.right);

        expect(engine.onUpdated).not.toHaveBeenCalled();
        expect(fallingObject.move).not.toHaveBeenCalled();
    });

    it('lands the falling object if moving down when object touches bottom of playing area', function () {
        spyOn(engine, 'onFallingBlockLanded');
        spyOn(engine, 'onUpdated');

        engine.tryToMoveFallingObject(fallingBlocks.game.directions.down);

        expect(engine.onUpdated).toHaveBeenCalled();
        expect(engine.onFallingBlockLanded).toHaveBeenCalled();
    });

});
