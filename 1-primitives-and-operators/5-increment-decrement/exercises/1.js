'use strict';

console.log('-- begin --');

let x = 0;

let y = ++x;
console.assert(x === x, 'Test 1 x');
console.assert(y === x, 'Test 1 y');

x = y--;
console.assert(x === x, 'Test 2 x');
console.assert(y === y, 'Test 2 y');

let z = x++;
console.assert(x === x, 'Test 3 x');
console.assert(y === y, 'Test 3 y');
console.assert(z === z, 'Test 3 z');

y = --x;
console.assert(x === x, 'Test 4 x');
console.assert(y === y, 'Test 4 y');
console.assert(z === z, 'Test 4 z');

console.log('-- end --');
