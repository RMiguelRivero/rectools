export function curry(fn) {
    return function curried(...args) {
        return args.length >= fn.length
            ? fn.apply(null, args)
            : curried.bind(null, ...args)
    }
}
