import { range } from '../../../src/generators/creators/range.js';

describe('range', () => {
    test('range(6) should return an iterable from 0 to 5', () => {
        const it = range(6);
        expect(it.next()).toEqual({ value: 0, done: false });
        expect(it.next()).toEqual({ value: 1, done: false });
        expect(it.next()).toEqual({ value: 2, done: false });
        expect(it.next()).toEqual({ value: 3, done: false });
        expect(it.next()).toEqual({ value: 4, done: false });
        expect(it.next()).toEqual({ value: 5, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
