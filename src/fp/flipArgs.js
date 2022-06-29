export function flipArgs(fn) {
    return function flipped(...args) {
        let [data, ...rest] = args;
        return fn(...rest, data);
    }
}
