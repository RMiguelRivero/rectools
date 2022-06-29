import { curry } from '../../fp/curry.js';
import { iter } from '../../utils/iterutils.js';

export const filter = curry(function* filter(predicate, iterable) {
    const iterator = iter(iterable);
    let value, done;
    while ({ value, done } = iterator.next()) {
        if (done) break;
        if (!predicate(value)) continue;
        yield value;
    }
});
