'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types

const isLoggedIn = true;
const secretInformation = 3;
const warningMessage = 'warning';
console.log(isLoggedIn, secretInformation, warningMessage);

const toDisplay = isLoggedIn ? secretInformation : warningMessage;
console.log(toDisplay);

console.log('-- end --');
