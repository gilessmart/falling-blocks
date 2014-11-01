describe('engine', function () {
    var fallObjectDefinition,
        initialCentreLocation,
        tetrimino,
        landedBlocksCollection,
        gameState,
        engine;

    beforeEach(function () {
        fallObjectDefinition = {
            rotationOffset: { x: 0, y: 0 },
            blockOffsets: [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 }
            ]
        };
        initialCentreLocation = { x: 2, y: 0 };
        tetrimino = fallingBlocks.tetrimino(fallObjectDefinition, initialCentreLocation);
        landedBlocksCollection = fallingBlocks.landedBlocksCollection(5, 4);
        gameState = {
            landedBlocks: landedBlocksCollection,
            tetrimino: tetrimino,
            score: 0
        };
        engine = fallingBlocks.engine(gameState);
    });

    it('rotates the falling object if there is room', function () {
        spyOn(tetrimino, 'rotate');
        spyOn(engine, 'onUpdated');

        engine.tryToRotateFallingObject(fallingBlocks.rotations.anticlockwise);

        expect(tetrimino.rotate).toHaveBeenCalledWith(fallingBlocks.rotations.anticlockwise);
        expect(engine.onUpdated).toHaveBeenCalled();
    });

    it('does not rotate the falling object if there is not room', function () {
        spyOn(tetrimino, 'rotate');
        spyOn(engine, 'onUpdated');

        engine.tryToRotateFallingObject(fallingBlocks.rotations.clockwise);

        expect(tetrimino.rotate).not.toHaveBeenCalled();
        expect(engine.onUpdated).not.toHaveBeenCalled();
    });

    it('moves the falling object if there is room', function () {
        spyOn(tetrimino, 'move');
        spyOn(engine, 'onUpdated');

        engine.tryToMoveFallingObject(fallingBlocks.directions.left);

        expect(engine.onUpdated).toHaveBeenCalled();
        expect(tetrimino.move).toHaveBeenCalledWith(fallingBlocks.directions.left);
    });

    it('does not move the falling object if there is not room', function () {
        spyOn(tetrimino, 'move');
        spyOn(engine, 'onUpdated');

        engine.tryToMoveFallingObject(fallingBlocks.directions.right);

        expect(engine.onUpdated).not.toHaveBeenCalled();
        expect(tetrimino.move).not.toHaveBeenCalled();
    });

    it('lands the falling object if moving down when object touches bottom of playing area', function () {
        spyOn(engine, 'onTetriminoLanded');
        spyOn(engine, 'onUpdated');

        engine.tryToMoveFallingObject(fallingBlocks.directions.down);

        expect(engine.onUpdated).toHaveBeenCalled();
        expect(engine.onTetriminoLanded).toHaveBeenCalled();
    });

});
