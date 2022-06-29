export function compose(...fns) {
    return function composed(x) {
        return fns.reduceRight((v, f) => f(v), x);
    };
}
