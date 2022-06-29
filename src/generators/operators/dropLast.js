import { iter } from '../../utils/iterutils.js';

export function* dropLast(iterable) {
    const iterator = iter(iterable);

    let value, done;
    let { value: previousValue, done: previousValueDone } = iterator.next();
    if (previousValueDone) {
        return;
    }
    while ({ value, done } = iterator.next()) {
        if (!done) {
            yield previousValue;
        }

        if (previousValueDone) {
            break;
        }

        [previousValue, previousValueDone] = [value, done];
    }
}
