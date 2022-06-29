import { reduce } from './reduce.js';

export const min = reduce((a, b) => a < b ? a : b, Infinity);
