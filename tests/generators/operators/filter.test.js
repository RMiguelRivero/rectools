import { filter } from '../../../src/generators/operators/filter.js';

describe('filter', () => {
    it('should return the exact number of elements', () => {
        const vowels = new Set('aeiouAEIOU');
        const isVowel = (l) => vowels.has(l);
        const curriedIt = filter(isVowel);
        const it = curriedIt('Abracadabra');

        expect(it.next()).toEqual({ value: 'A', done: false });
        expect(it.next()).toEqual({ value: 'a', done: false });
        expect(it.next()).toEqual({ value: 'a', done: false });
        expect(it.next()).toEqual({ value: 'a', done: false });
        expect(it.next()).toEqual({ value: 'a', done: false });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
