import { reduce } from './reduce.js';

export const max = reduce((a, b) => a > b ? a : b, -Infinity);
