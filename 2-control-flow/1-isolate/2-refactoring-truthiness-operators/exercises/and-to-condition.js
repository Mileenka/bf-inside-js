'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of &&
const a = 999;
console.log(a);

const isBigNumber = (typeof a === 'number') ? (a > 1000) : false;
console.log(isBigNumber);

console.log('-- end --');