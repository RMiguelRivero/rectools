import { dropFirst } from '../../../src/generators/operators/dropFirst.js';

describe('dropFirst', () => {
    test('if iterable is empty should return an empty iterable', () => {
        const it = dropFirst([]);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('if iterable has 1 element should return an empty iterable', () => {
        const it = dropFirst([1]);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('if iterable has more than 1 element should return iterable skipping first element', () => {
        const it = dropFirst([1,2,3]);
        expect(it.next()).toEqual({ value: 2, done: false });
        expect(it.next()).toEqual({ value: 3, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
