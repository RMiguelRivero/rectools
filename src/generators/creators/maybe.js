export function* maybe(value) {
    if (value !== undefined && value !== null) {
        yield value;
    }
}
