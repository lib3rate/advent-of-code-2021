import { directions } from './input.js';

const determinePosition = (array) => {
    let horizontalPosition = 0;
    let depth = 0;

    array.forEach((item) => {
        const direction = Object.keys(item)[0];

        if (direction === 'forward') {
            horizontalPosition += item[direction];
        } else if (direction === 'down') {
            depth += item[direction];
        } else if (direction === 'up') {
            depth -= item[direction];
        }
    });

    return horizontalPosition * depth;
};

console.log(determinePosition(directions));