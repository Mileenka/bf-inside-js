'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||
// try different values and different types

const firstName = 'Adam';
const lastName = 'Anerson';
console.log(firstName, lastName);

const hasAnAName = firstName[0] === 'A' || lastName[0] === 'A';
console.log(hasAnAName);

console.log('-- end --');
