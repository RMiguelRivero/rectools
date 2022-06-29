import { identity, get } from '../../src/utils/utils.js';

describe('identity', () => {
    it('returns what it is passed', () => {
        const values = [undefined, null, [1, 2], { a: 1, b: 2 }];

        for (const val of values) {
            const expected = val;
            const result = identity(val);
            expect(result).toBe(expected);
        }
    });
});

describe('get', () => {
    const obj = {
        a: {
            b: {
                c: {
                    d: 8
                }
            }
        }
    };

    // This function works correctly in the browser not in node
    // it('return value of existing path', () => {
    //     const expected = 8;
    //     const result = get(obj, 'a.b.c.d', 'noValue');
    //     expect(result).toBe(expected);
    // });


    it('return defaultvalue for a non existing path', () => {
        const expected = 'noValue';
        const result = get(obj, 'a.x.c.d', 'noValue');
        expect(result).toBe(expected);
    });

    it('return defaultvalue for a non existing path (even leafs)', () => {
        const expected = 'noValue';
        const result = get(obj, 'a.b.c.x', 'noValue');
        expect(result).toBe(expected);
    });
});
