import { head } from '../../../src/generators/operators/head.js';

describe('head', () => {
    test('head returns only one element from an iterable', () => {
        const it = head('abcd');
        expect(it.next().value).toBe('a');

        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('head should complete when iterable is empty', () => {
        const it = head('');
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('head should complete when iterable is empty 2', () => {
        const it = head([]);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('head yield just first element of the iterable', () => {
        const it = head([{ a: 1 }, { a: 2 }]);
        expect(it.next()).toEqual({ value: { a: 1 }, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
