import { doubleRange } from '../../../src/generators/creators/doubleRange.js';

describe('doubleRange', () => {
    test('double range firstY true should change Y first', () => {
        const it = doubleRange({ xMin: 0, xMax: 2, yMin: 5, yMax: 8, firstY: true });

        let [x, y] = it.next().value;
        expect(x).toBe(0);
        expect(y).toBe(5);

        expect(it.next().value.toLocaleString()).toBe('0,6');
        expect(it.next().value.toLocaleString()).toBe('0,7');
        expect(it.next().value.toLocaleString()).toBe('0,8');

        expect(it.next().value.toLocaleString()).toBe('1,5');
        expect(it.next().value.toLocaleString()).toBe('1,6');
        expect(it.next().value.toLocaleString()).toBe('1,7');
        expect(it.next().value.toLocaleString()).toBe('1,8');

        expect(it.next().value.toLocaleString()).toBe('2,5');
        expect(it.next().value.toLocaleString()).toBe('2,6');
        expect(it.next().value.toLocaleString()).toBe('2,7');
        expect(it.next().value.toLocaleString()).toBe('2,8');

        expect(it.next()).toEqual({ value: undefined, done: true });
    });

    test('double range firstY false should change X first', () => {
        const it = doubleRange({ xMin: 0, xMax: 2, yMin: 5, yMax: 8, firstY: false })
        let [x, y] = it.next().value;
        expect(x).toBe(0);
        expect(y).toBe(5);

        expect(it.next().value.toLocaleString()).toBe('1,5');
        expect(it.next().value.toLocaleString()).toBe('2,5');

        expect(it.next().value.toLocaleString()).toBe('0,6');
        expect(it.next().value.toLocaleString()).toBe('1,6');
        expect(it.next().value.toLocaleString()).toBe('2,6');

        expect(it.next().value.toLocaleString()).toBe('0,7');
        expect(it.next().value.toLocaleString()).toBe('1,7');
        expect(it.next().value.toLocaleString()).toBe('2,7');

        expect(it.next().value.toLocaleString()).toBe('0,8');
        expect(it.next().value.toLocaleString()).toBe('1,8');
        expect(it.next().value.toLocaleString()).toBe('2,8');

        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
