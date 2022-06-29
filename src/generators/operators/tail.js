import { maybe } from '../creators/maybe.js';

export function* tail(iterable) {
    const ar = Array.isArray(iterable) ? iterable : Array.from(iterable);
    yield* maybe(ar[ar.length - 1]);
}
