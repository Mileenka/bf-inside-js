'use strict';

console.log('-- begin --');

// refactor this code to use || instead of a conditional

// try different values and different types

const isAfterFive = false;
const isTheWeekend = true;
console.log(isAfterFive, isTheWeekend);

const stopWorking = isAfterFive === true || isTheWeekend === true;
console.log(stopWorking);

console.log('-- end --');
