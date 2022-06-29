import { max } from '../../../src/generators/operators/max.js';

describe('max', () => {
    it('should yield just the maximum value of a list', () => {
        const it = max([8, 4, 9, 397, 45]);
        expect(it.next()).toEqual({ value: 397, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should yield just the maximum value of a list 2', () => {
        const it = max([8, Infinity, 9, 397, 45]);
        expect(it.next()).toEqual({ value: Infinity, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should yield just the maximum value of a list 2', () => {
        const it = max([9, 9, 9, 9, 9, 9]);
        expect(it.next()).toEqual({ value: 9, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
