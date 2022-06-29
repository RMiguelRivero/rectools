import { tail } from '../../../src/generators/operators/tail.js';

describe('tail', () => {
    test('tail returns only the last element from an iterable', () => {
        const it = tail('abcd');
        expect(it.next().value).toBe('d');
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('tail should complete when iterable is empty', () => {
        const it = tail([]);
        expect(it.next()).toEqual({ value: undefined, done: true });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('head yield just first element of the iterable', () => {
        const it = tail([{ a: 1 }, { a: 2 }]);
        expect(it.next()).toEqual({ value: { a: 2 }, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
