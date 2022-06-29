import { curry } from '../../fp/curry.js';
import { iter } from '../../utils/iterutils.js';

export const map = curry(function* map(transform, iterable) {
    const iterator = iter(iterable);
    let value, done;
    while ({ value, done } = iterator.next()) {
        if (done) break;
        yield transform(value);
    }
});
