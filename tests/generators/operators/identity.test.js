import { identity } from '../../../src/generators/operators/identity';

describe('identity', () => {
    it('should return what it was passed', () => {
        const point = { x: 1, y: 5 }
        const expected = ['a', 3, point];
        const it = identity(expected);

        expect(it.next().value).toBe('a');
        expect(it.next().value).toBe(3);
        expect(it.next().value).toBe(point);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
