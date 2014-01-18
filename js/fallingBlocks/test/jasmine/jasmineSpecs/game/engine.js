describe('engine', function () {
    var fallObjectDefinition,
        initialCentreLocation,
        tetrimino,
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
        tetrimino = fallingBlocks.game.tetrimino(fallObjectDefinition, initialCentreLocation);
        landedBlocksCollection = fallingBlocks.game.landedBlocksCollection(5, 4);
        gameState = {
            landedBlocks: landedBlocksCollection,
            tetrimino: tetrimino,
            score: 0
        };
        engine = fallingBlocks.game.engine(gameState);
    });

    it('rotates the falling object if there is room', function () {
        spyOn(tetrimino, 'rotate');
        spyOn(engine, 'onUpdated');

        engine.tryToRotateFallingObject(fallingBlocks.game.rotations.anticlockwise);

        expect(tetrimino.rotate).toHaveBeenCalledWith(fallingBlocks.game.rotations.anticlockwise);
        expect(engine.onUpdated).toHaveBeenCalled();
    });

    it('does not rotate the falling object if there is not room', function () {
        spyOn(tetrimino, 'rotate');
        spyOn(engine, 'onUpdated');

        engine.tryToRotateFallingObject(fallingBlocks.game.rotations.clockwise);

        expect(tetrimino.rotate).not.toHaveBeenCalled();
        expect(engine.onUpdated).not.toHaveBeenCalled();
    });

    it('moves the falling object if there is room', function () {
        spyOn(tetrimino, 'move');
        spyOn(engine, 'onUpdated');

        engine.tryToMoveFallingObject(fallingBlocks.game.directions.left);

        expect(engine.onUpdated).toHaveBeenCalled();
        expect(tetrimino.move).toHaveBeenCalledWith(fallingBlocks.game.directions.left);
    });

    it('does not move the falling object if there is not room', function () {
        spyOn(tetrimino, 'move');
        spyOn(engine, 'onUpdated');

        engine.tryToMoveFallingObject(fallingBlocks.game.directions.right);

        expect(engine.onUpdated).not.toHaveBeenCalled();
        expect(tetrimino.move).not.toHaveBeenCalled();
    });

    it('lands the falling object if moving down when object touches bottom of playing area', function () {
        spyOn(engine, 'onFallingBlockLanded');
        spyOn(engine, 'onUpdated');

        engine.tryToMoveFallingObject(fallingBlocks.game.directions.down);

        expect(engine.onUpdated).toHaveBeenCalled();
        expect(engine.onFallingBlockLanded).toHaveBeenCalled();
    });

});
