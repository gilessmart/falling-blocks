xdescribe('clock', function () {
    var interval = 100,
        clock;

    beforeEach(function () {
        jasmine.Clock.useMock();
        clock = fallingBlocks.clock(interval);
        spyOn(clock, 'onTick');
    });

    it('ticks on each interval after start', function () {
        clock.start();

        for (var i = 0; i < 100; i++) {
            jasmine.Clock.tick(99);
            expect(clock.onTick.callCount).toEqual(i);

            jasmine.Clock.tick(1);
            expect(clock.onTick.callCount).toEqual(i+1);
        }
    });

    it('stops ticking after stop', function () {
        var i, callCountAfterStop;
        clock.start();

        for (i = 0; i < 100; i++) {
            jasmine.Clock.tick(interval - 1);
            expect(clock.onTick.callCount).toEqual(i);

            jasmine.Clock.tick(1);
            expect(clock.onTick.callCount).toEqual(i+1);
        }

        clock.stop();
        callCountAfterStop = clock.onTick.callCount;

        for (i = 0; i < 100; i++) {
            jasmine.Clock.tick(interval);
            expect(clock.onTick.callCount).toEqual(callCountAfterStop);
        }
    });

    it('waits a full interval to tick after restart', function () {
        clock.start();
        jasmine.Clock.tick(interval - 1);

        clock.restart();
        jasmine.Clock.tick(interval - 1);
        expect(clock.onTick.callCount).toEqual(0);

        jasmine.Clock.tick(1);
        expect(clock.onTick.callCount).toEqual(1);
    });
});
