'use strict';

console.log('-- begin --');

// refactor this code to use && instead of a conditional

// try different values and different types

const input = 'pickles';
const password = 'pickles';
console.log(input, password);

const isValidPassword = typeof input === 'string' && input === password;
console.log(isValidPassword);

console.log('-- end --');
