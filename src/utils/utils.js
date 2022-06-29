export function identity(element) {
    return element;
}

export function not(fn) {
    return function no() {
        return !fn.apply(null, arguments);
    }
}

// This function works correctly in the browser, not in Node
export function get(target, path, defaultValue) {
    const pathArray = path.split('.');
    const { length } = pathArray;
    let obj = target;
    let result;
    for (let i = 0, property = pathArray[i]; i < length; i++, property = pathArray[i]) {
        try {
            newTarget = Reflect.get(obj, property);
            if (i === length - 1) {
                result = newTarget ?? defaultValue;
            } else {
                obj = newTarget
            }
        } catch (error) {
            result = defaultValue;
            break;
        }
    }
    return result;
}

