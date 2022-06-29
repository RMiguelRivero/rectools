import { stepper } from './stepper.js';

export function *range(end) {
    yield *stepper(0, end, 1);
}
