import { safe } from '../../../src/generators/creators/safe.js';

describe('safe', () => {
    it('should delegate iteration over its argument if it is iterable (Array)', () => {
        const it = safe([5, 10]);

        expect(it.next().value).toBe(5);
        expect(it.next().value).toBe(10);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should delegate iteration over its argument if it is iterable 2 (Set)', () => {
        const input = new Set(['hello', 'world', '!']);
        const it = safe(input);

        expect(it.next().value).toBe('hello');
        expect(it.next().value).toBe('world');
        expect(it.next().value).toBe('!');
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should delegate iteration over its argument if it is iterable 3 (String)', () => {
        const input = 'hello';
        const it = safe(input);

        expect(it.next().value).toBe('h');
        expect(it.next().value).toBe('e');
        expect(it.next().value).toBe('l');
        expect(it.next().value).toBe('l');
        expect(it.next().value).toBe('o');
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should safely create an iterable if its argument is not', () => {
        const it = safe(33);

        expect(it.next().value).toBe(33);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});