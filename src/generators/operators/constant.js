import { iter } from '../../utils/iterutils.js';

export function k(value) {
    return function* constant(iterable) {
        const iterator = iter(iterable);
        let done;
        while ({ done } = iterator.next()) {
            if (done) break;
            yield value;
        }
    }
}
