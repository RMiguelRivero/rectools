import { map } from '../../../src/generators/operators/map.js';
import { stepper } from '../../../src/generators/creators/stepper.js';

describe('map', () => {
    it('should transform every value of the string', () => {
        const toUpperCase = map((el) => el.toUpperCase());
        let it = toUpperCase('abcd');

        expect(it.next().value).toBe('A');
        expect(it.next().value).toBe('B');
        expect(it.next().value).toBe('C');
        expect(it.next().value).toBe('D');
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should transform every value of an array', () => {
        const x10 = map((x) => x * 10);
        let it = x10([3, 6, 9]);

        expect(it.next().value).toBe(30);
        expect(it.next().value).toBe(60);
        expect(it.next().value).toBe(90);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    it('should transform every value yielded by a generator', () => {
        const squarePower = map((x) => x ** 2);
        let it = squarePower(stepper(3, 7, 1));

        expect(it.next().value).toBe(9);
        expect(it.next().value).toBe(16);
        expect(it.next().value).toBe(25);
        expect(it.next().value).toBe(36);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
