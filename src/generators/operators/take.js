import { curry } from '../../fp/curry.js';
import { iter } from '../../utils/iterutils.js';

export const take = curry(function* take(n, iterable) {
    const iterator = iter(iterable);
    while (n) {
        const { done, value } = iterator.next();
        if (done) break;
        yield value
        n--;
    }
});
