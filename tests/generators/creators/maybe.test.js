import { maybe } from '../../../src/generators/creators/maybe.js';

describe('maybe', () => {
    it('should return same input if value passed different from null or undefined (number)', () => {
        const input = 75;
        const it = maybe(input);

        let { value, done } = it.next();
        expect(value).toBe(input);
        expect(done).toBe(false);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should return same input if value passed different from null or undefined (iterable)', () => {
        const input = [6, 5];
        const it = maybe(input);

        let { value, done } = it.next();
        expect(value).toBe(input);
        expect(done).toBe(false);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });


    it('should complete when the value passed it null', () => {
        const input = null;
        const it = maybe(input);

        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should complete when the value passed it undefined', () => {
        const input = undefined;
        const it = maybe(input);

        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
