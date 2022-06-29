import { fromObject } from '../../../src/generators/creators/fromObject.js';

describe('fromObject', () => {
    it('should return an iterable of the object', () => {
        const it = fromObject({
            count: 8,
            version: '1.0.1',
        });

        let [key, value] = it.next().value;
        expect(key).toBe('count');
        expect(value).toBe(8);
        [key, value] = it.next().value;
        expect(key).toBe('version');
        expect(value).toBe('1.0.1');
        expect(it.next()).toEqual({ value: undefined, done: true });
    });


    it('should return an iterable of the object with numbers as keys', () => {
        const it = fromObject({
            version: '1.0.1',
            count: 8,
            24: 'hello'
        });

        let [key, value] = it.next().value;
        expect(key).toBe('24');
        expect(value).toBe('hello');
        [key, value] = it.next().value;
        expect(key).toBe('version');
        expect(value).toBe('1.0.1');
        [key, value] = it.next().value;
        expect(key).toBe('count');
        expect(value).toBe(8);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
