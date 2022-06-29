import { iter, reduce, filterOut, toArray, indexedBy, mapToArray, filterToArray } from '../../src/utils/iterutils.js';
import { range } from '../../src/generators/creators/range.js';

describe('iter', () => {
    test('Given an iterable it returns an iterator', () => {
        const it = iter('abcd');

        expect(it.next).toBeDefined();
        expect(it.next().value).toBe('a');
    });

    test('Given a generator it returns an iterator', () => {
        const it = iter(range(5));

        expect(it.next).toBeDefined();
        expect(it.next().value).toBe(0);
        expect(it.next().value).toBe(1);
    });

    test('Given an invalid input, it throws an error', () => {
        function call() {
            iter(5);
        }
        expect(call).toThrowError('is not an iterable');
    });
});


describe('reduce', () => {
    it('should reduce over an array and return a single value without initial value', () => {
        const result = reduce((a, b) => a + b, 0, [1, 0, 0, 1, 0, 1, 1]);
        const expected = 4;

        expect(result).toBe(expected);
    });

    it('should reduce over a string and return a single value without initial value', () => {
        const result = reduce((a, b) => a + b.toUpperCase(), '', 'abcd');
        const expected = 'ABCD';

        expect(result).toBe(expected);
    });
    it('should reduce over a generator and return a single value without initial value', () => {
        const result = reduce((a, b) => a + b, 0, range(6));
        const expected = 15;

        expect(result).toBe(expected);
    });

    it('should reduce over an iterable and return a single value with initial value', () => {
        const array = [{ count: 4 }, { count: 6 }, { count: 8 }];
        const result = reduce((acc, current) => acc + current.count, 2, array);
        const expected = 20;

        expect(result).toBe(expected);
    });
});

describe('filter', () => {
    it('should return array of uppercase letters', () => {
        const iterable = 'Somewhere in la Mancha';
        const isUppercase = (letter) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(letter);

        const result = filterToArray(isUppercase, iterable);
        const expected = ['S', 'M'];

        expect(result.length).toBe(expected.length);
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });

    it('should return an array of odd numbers from a generator', () => {
        const iterable = range(7);
        const isOdd = (n) => Boolean(n % 2);

        const result = filterToArray(isOdd, iterable);
        const expected = [1, 3, 5];

        expect(result.length).toBe(expected.length);
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });
});

describe('filterOut', () => {
    it('should return array of lowercase letters', () => {
        const iterable = 'Somewhere in la Mancha';
        const isUppercase = (letter) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(letter);

        const result = filterOut(isUppercase, iterable);
        const expected = 'omewhere in la ancha';

        expect(result.length).toBe(expected.length);
        expect(result.join('')).toBe(expected);
    });

    it('should return an array of odd numbers from a generator', () => {
        const iterable = range(7);
        const isOdd = (n) => Boolean(n % 2);

        const result = filterOut(isOdd, iterable);
        const expected = [0, 2, 4, 6];

        expect(result.length).toBe(expected.length);
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });
});

describe('map', () => {
    it('should transform all elements of the iterable', () => {
        const power = (value) => value ** 2;
        const result = mapToArray(power, [1, 10, 100]);
        const expected = [1, 100, 10000];

        expect(result.length).toBe(expected.length);
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });
});

describe('toArray', () => {
    it('should transform an array into itself', () => {
        const result = toArray([1, 10, 100]);
        const expected = [1, 10, 100];

        expect(result.length).toBe(expected.length);
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });

    it('should transform a string into an array of strings', () => {
        const result = toArray('abcdef');
        const expected = ['a', 'b', 'c', 'd', 'e', 'f'];

        expect(result.length).toBe(expected.length);
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });
});

describe('indexedBy', () => {
    it('should return an object where indexes are the value return by a getter', () => {
        const array = [
            { id: 1, product: 'apple' },
            { id: 2, product: 'banana' },
            { id: 3, product: 'pepper' }
        ];
        const result = indexedBy((el) => el.product.substring(1, 3), array);
        const expected = {
            'pp': { id: 1, product: 'apple' },
            'an': { id: 2, product: 'banana' },
            'ep': { id: 3, product: 'pepper' }
        };

        expect(result).toEqual(expected);
    });

    it('should return an object where indexes are the key provided', () => {
        const array = [
            { id: 1, product: 'apple' },
            { id: 2, product: 'banana' },
            { id: 3, product: 'pepper' }
        ];
        const result = indexedBy('id', array);
        const expected = {
            1: { id: 1, product: 'apple' },
            2: { id: 2, product: 'banana' },
            3: { id: 3, product: 'pepper' }
        };

        expect(result).toEqual(expected);
    });
});
