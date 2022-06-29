export function* safe(value) {
    if (value && typeof value[Symbol.iterator] === "function") {
        yield* value;
    } else {
        yield value;
    }
}
