export function pipe(...fns) {
    return function piped(x) {
        return fns.reduce((v, f) => f(v), x);
    };
}
