import { dropLast } from '../../../src/generators/operators/dropLast.js';

describe('dropLast', () => {
    test('if iterable is empty should return an empty iterable', () => {
        const it = dropLast([]);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('if iterable has 1 element should return an empty iterable', () => {
        const it = dropLast([1]);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('if iterable has more than 1 element should return iterable skipping last element', () => {
        const it = dropLast([1,2,3]);
        expect(it.next()).toEqual({ value: 1, done: false });
        expect(it.next()).toEqual({ value: 2, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
