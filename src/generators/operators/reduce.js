import { curry } from '../../fp/curry.js';
import { iter } from '../../utils/iterutils.js';

export const reduce = curry(function* reduce(reducer, initialValue, iterable) {
    const iterator = iter(iterable);
    let accumulator = initialValue, value, done;
    while ({ value, done } = iterator.next()) {
        if (done) break;
        accumulator = reducer(accumulator, value);
    }

    yield accumulator;
});
