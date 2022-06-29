import { iter } from '../../utils/iterutils.js';

export function* enumerate(iterable) {
    const iterator = iter(iterable);
    let i = 0;
    let value, done;
    while ({ value, done } = iterator.next()) {
        if (done) break;
        yield [value, i++];
    }
}
