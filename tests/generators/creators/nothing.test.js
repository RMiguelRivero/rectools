import { nothing } from '../../../src/generators/creators/nothing.js';

describe('nothing', () => {
    it('should be done immediatelly', () => {
        const it = nothing();
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
