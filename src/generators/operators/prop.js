import { curry } from '../../fp/curry.js';
import { iter } from '../../utils/iterutils.js';
import { maybe } from '../creators/maybe.js';

export const prop = curry(function* prop(key, iterable) {
    const iterator = iter(iterable);
    let value, done;
    while ({ value, done } = iterator.next()) {
        if (done) break;
        yield* maybe(value[key]);
    }
});
