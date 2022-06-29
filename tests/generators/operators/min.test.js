import { min } from '../../../src/generators/operators/min.js';

describe('min', () => {
    it('should yield just the minimum value of a list', () => {
        const it = min([8, 4, 9, 397, 45]);
        expect(it.next()).toEqual({ value: 4, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should yield just the minimum value of a list 2', () => {
        const it = min([8, -Infinity, 9, 397, 45]);
        expect(it.next()).toEqual({ value: -Infinity, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should yield just the minimum value of a list 2', () => {
        const it = min([9, 9, 9, 9, 9, 9]);
        expect(it.next()).toEqual({ value: 9, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
