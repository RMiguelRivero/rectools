import { of } from '../../../src/generators/creators/of.js';
import { range } from '../../../src/generators/creators/range.js';

describe('of', () => {
    it('should create a 1 element iterable out of a number', () => {
        const input = 43;
        const it = of(input);

        expect(it.next()).toEqual({ value: input, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
    it('should create a 1 element iterable out of an array', () => {
        const input = [1, 2, 3];
        const it = of(input);

        const { value, done } = it.next();
        expect(JSON.stringify(value)).toEqual(JSON.stringify(input));
        expect(done).toBe(false);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should create a 1 element iterable out of an object', () => {
        const input = { id: 1, name: 'Miguel' };
        const it = of(input);

        const { value, done } = it.next();
        expect(value).toEqual(input);
        expect(done).toBe(false);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should create a 1 element iterable out of a generator', () => {
        const input = range(2);
        const it = of(input);
        const { value, done } = it.next();

        expect(value[Symbol.toStringTag]).toEqual(input[Symbol.toStringTag]);
        expect(done).toBe(false);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
