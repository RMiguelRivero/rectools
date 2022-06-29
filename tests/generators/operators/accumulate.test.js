import { accumulate } from '../../../src/generators/operators/accumulate.js';

describe('accumulate', () => {
    it('should return accumulated results of other binary functions', () => {
        const reducer = (acc, current) => {
            const { category, title } = current;
            if (!acc[category]) {
                acc[category] = [title];
            } else {
                acc[category].push(title);
            }
            return acc;
        };
        const curriedIt = accumulate(reducer, {});
        const it = curriedIt([
            { category: 'movies', title: 'Trainspoiting' },
            { category: 'shows', title: 'IT crowd' },
            { category: 'movies', title: 'The Matrix' },
            { category: 'movies', title: 'The Shining' },
            { category: 'movies', title: 'Casablanca' },
            { category: 'shows', title: 'Penny Dreadful' },
        ]);


        expect(it.next().value).toEqual({
            movies: ['Trainspoiting']
        });
        expect(it.next().value).toEqual({
            movies: ['Trainspoiting'],
            shows: ['IT crowd']
        });
        expect(it.next().value).toEqual({
            movies: ['Trainspoiting', 'The Matrix'],
            shows: ['IT crowd']
        });
        expect(it.next().value).toEqual({
            movies: ['Trainspoiting', 'The Matrix', 'The Shining'],
            shows: ['IT crowd']
        });
        expect(it.next().value).toEqual({
            movies: ['Trainspoiting', 'The Matrix', 'The Shining', 'Casablanca'],
            shows: ['IT crowd']
        });
        expect(it.next().value).toEqual({
            movies: ['Trainspoiting', 'The Matrix', 'The Shining', 'Casablanca'],
            shows: ['IT crowd', 'Penny Dreadful']
        });
        expect(it.next()).toEqual({ value: undefined, done: true });
    });
});
