import { tap } from '../../../src/generators/operators/tap.js';

describe('tap', () => {
    it('execute sideeffects without interfering the flow', () => {
        const sideEffectFn = jest.fn();
        const doSideEffect = tap(sideEffectFn)
        const it = doSideEffect('rectools');

        expect(it.next()).toEqual({ value: 'r', done: false });
        expect(sideEffectFn).toHaveBeenCalledWith('r');

        expect(it.next()).toEqual({ value: 'e', done: false });
        expect(sideEffectFn).toHaveBeenCalledWith('e');

        expect(it.next()).toEqual({ value: 'c', done: false });
        expect(sideEffectFn).toHaveBeenCalledWith('c');

        expect(it.next()).toEqual({ value: 't', done: false });
        expect(sideEffectFn).toHaveBeenCalledWith('t');

        expect(it.next()).toEqual({ value: 'o', done: false });
        expect(sideEffectFn).toHaveBeenCalledWith('o');

        expect(it.next()).toEqual({ value: 'o', done: false });
        expect(sideEffectFn).toHaveBeenCalledWith('o');

        expect(it.next()).toEqual({ value: 'l', done: false });
        expect(sideEffectFn).toHaveBeenCalledWith('l');

        expect(it.next()).toEqual({ value: 's', done: false });
        expect(sideEffectFn).toHaveBeenCalledWith('s');

        expect(sideEffectFn.mock.calls.length).toBe(8);
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
