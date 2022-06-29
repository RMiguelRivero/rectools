export function* doubleRange({ xMin, xMax, yMin, yMax, firstY = true }) {
    if (firstY) {
        for (let x = xMin; x <= xMax; x++) {
            for (let y = yMin; y <= yMax; y++) {
                yield [x, y];
            }
        }
    } else {
        for (let y = yMin; y <= yMax; y++) {
            for (let x = xMin; x <= xMax; x++) {
                yield [x, y];
            }
        }
    }
}
