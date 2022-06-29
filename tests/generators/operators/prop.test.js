import { prop } from '../../../src/generators/operators/prop.js';

describe('prop', () => {
    it('should return the property for every element in the iterable', () => {
        const it = prop('length')(['Hi', 'xyz', 'hello']);

        expect(it.next().value).toBe(2);
        expect(it.next().value).toBe(3);
        expect(it.next().value).toBe(5);

        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
