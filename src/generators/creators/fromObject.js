export function *fromObject(obj) {
    yield* Object.entries(obj);
}
