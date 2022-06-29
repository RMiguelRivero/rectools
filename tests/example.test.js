import { range } from '../src/generators/creators/range.js';
import { map } from '../src/generators/operators/map.js';
import { filter } from '../src/generators/operators/filter.js';
import { toArray, toValue } from '../src/utils/iterutils.js';
import { accumulate } from '../src/generators/operators/accumulate.js';
import { compose } from '../src/fp/compose.js';
import { tap } from '../src/generators/operators/tap.js';
import { sum } from '../src/generators/operators/sum.js';


const power = (x) => x ** 2;
const isOdd = (n) => Boolean(n % 2);
const log = (key) => tap((x) => console.log(`${key}: ${x}`));

fdescribe('Example', () => {
    fit('should return a value', () => {
        const f = compose(
            toValue,
            log('sum'),
            sum,
            log('powered'),
            map(power),
            log('filtered'),
            filter(isOdd),
            log('rangeVal'),
            range
        );

        expect(f(4)).toEqual(10);
        //  rangeVal: 0
        //  rangeVal: 1
        //  filtered: 1
        //  powered: 1
        //  rangeVal: 2
        //  rangeVal: 3
        //  filtered: 3
        //  powered: 9
        //  sum: 10

        expect(f(6)).toEqual(35);
        // rangeVal: 0
        // rangeVal: 1
        // filtered: 1
        // powered: 1
        // rangeVal: 2
        // rangeVal: 3
        // filtered: 3
        // powered: 9
        // rangeVal: 4
        // rangeVal: 5
        // filtered: 5
        // powered: 25
        // sum: 35
    });
});
