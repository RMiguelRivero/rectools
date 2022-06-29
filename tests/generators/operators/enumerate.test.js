import { enumerate } from '../../../src/generators/operators/enumerate.js';

describe('enumerate', () => {
    test('enumerate should return a iterable of tuples [value, index]', () => {
        const it = enumerate('abcde');
        expect(it.next()).toEqual({ value: ['a', 0], done: false });
        expect(it.next()).toEqual({ value: ['b', 1], done: false });
        expect(it.next()).toEqual({ value: ['c', 2], done: false });
        expect(it.next()).toEqual({ value: ['d', 3], done: false });
        expect(it.next()).toEqual({ value: ['e', 4], done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
