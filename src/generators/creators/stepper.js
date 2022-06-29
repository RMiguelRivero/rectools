export function *stepper(start, end, step) {
    for (let i = start; i < end; i+=step) {
        yield i;
    }
}
