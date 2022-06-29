import { reduce } from '../../../src/generators/operators/reduce.js';

describe('reduce', () => {
    it('should reduce iterable to one value iterable', () => {
        const sum = reduce((a, b) => a + b, 0);
        let it = sum([1, 0, 1, 0, 1, 0]);

        expect(it.next()).toEqual({ value: 3, done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
