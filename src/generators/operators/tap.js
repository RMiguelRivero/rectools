import { curry } from '../../fp/curry.js';
import { iter } from '../../utils/iterutils.js';

export const tap = curry(function* tap(fn, iterable) {
    const iterator = iter(iterable);
    let value, done;
    while ({ value, done } = iterator.next()) {
        if (done) break;
        fn(value);
        yield value;
    }
});
