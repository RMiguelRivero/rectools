import { take } from '../../../src/generators/operators/take.js';

describe('take', () => {
    test('take should return the exact number of elements', () => {
        const first3 = take(3);
        const it = first3('xyzabc');

        expect(it.next()).toEqual({ value: 'x', done: false });
        expect(it.next()).toEqual({ value: 'y', done: false });
        expect(it.next()).toEqual({ value: 'z', done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('take should return the exact number of elements', () => {
        const first3 = take(3);
        const it = first3([1, 2, 4, 8, 16, 32]);

        expect(it.next()).toEqual({ value: 1, done: false });
        expect(it.next()).toEqual({ value: 2, done: false });
        expect(it.next()).toEqual({ value: 4, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
