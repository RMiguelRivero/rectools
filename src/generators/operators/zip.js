import { iter } from '../../utils/iterutils.js';

export function* zip(...iterables) {
    const iterators = iterables.map(iter);
    loop: while (true) {
        const ar = [];
        for (let i = 0; i < iterators.length; i++) {
            const { value, done } = iterators[i].next();
            if (done) break loop;
            ar.push(value);
        }
        yield ar;
    }
}
