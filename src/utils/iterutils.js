import { curry } from '../fp/curry.js';
import { not } from './utils.js';

export function iter(iterable) {
    try {
        return iterable[Symbol.iterator]();
    } catch (_) {
        throw TypeError(`${iterable} is not an iterable`)
    }
}

export const reduce = curry(function reduce(reducer, initialValue, iterable) {
    const iterator = iter(iterable);
    let accumulator = initialValue, value, done;
    while ({ value, done } = iterator.next()) {
        if (done) break;
        accumulator = reducer(accumulator, value);
    }

    return accumulator;
});

export const filterToArray = curry(function filterToArray(predicate, iterable) {
    return reduce(
        (acc, item) => {
            if (predicate(item)) {
                acc.push(item);
            }
            return acc;
        },
        [],
        iterable
    );
});

export const filterOut = curry(function filterOut(predicate, iterable) {
    return filterToArray(not(predicate), iterable);
});

export const mapToArray = curry(function mapToArray(transform, iterable) {
    return toArray(iterable).map(transform)
});

export function toArray(iterable) {
    return Array.isArray(iterable) ? iterable : Array.from(iterable);
}

export function toValue(iterable) {
    const [ value ] = iterable;
    return value;
}

export const indexedBy = curry(function indexBy(attributeOrFunction, array) {
    return reduce(
        (acc, item) => {
            const key = typeof attributeOrFunction === 'string'
                ? item[attributeOrFunction]
                : attributeOrFunction(item)
            acc[key] = item;
            return acc;
        },
        {},
        array
    );
});
