'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'x';
let temp;

// --- swap values ---

// --- test final values ---

const test1 = b === 'x';
console.assert(test1, 'Test 1');

const test2 = a === 'y';
console.assert(test2, 'Test 2');

const test3 = temp === undefined;
console.assert(test3, 'Test 3');

console.log('-- end --');
