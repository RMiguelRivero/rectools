import { iter } from '../../utils/iterutils.js';

export function* dropFirst(iterable) {
    const iterator = iter(iterable);
    iterator.next();
    let value, done;
    while ({ value, done } = iterator.next()) {
        if (done) break;
        yield value;
    }
}
