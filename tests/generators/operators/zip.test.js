import { zip } from '../../../src/generators/operators/zip.js';
import { range } from '../../../src/generators/creators/range.js';


describe('zip', () => {
    test('zip should transpose a matrix', () => {
        const it = zip('miguel', [2, 4, 6, 8, 10], range(4));
        let [a, b, c] = it.next().value;
        expect(a).toBe('m');
        expect(b).toBe(2);
        expect(c).toBe(0);
        [a, b, c] = it.next().value
        expect(a).toBe('i');
        expect(b).toBe(4);
        expect(c).toBe(1);
        [a, b, c] = it.next().value
        expect(a).toBe('g');
        expect(b).toBe(6);
        expect(c).toBe(2);
        [a, b, c] = it.next().value
        expect(a).toBe('u');
        expect(b).toBe(8);
        expect(c).toBe(3);

        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
