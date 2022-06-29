import { stepper } from '../../../src/generators/creators/stepper.js';
describe('stepper', () => {
    test('stepper(1, 6, 2) should return an iterable starting in 1 with a step of 2 up to 6', () => {
        const it = stepper(1, 6, 2);
        expect(it.next()).toEqual({ value: 1, done: false });
        expect(it.next()).toEqual({ value: 3, done: false });
        expect(it.next()).toEqual({ value: 5, done: false });

        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
