'use strict';

console.log('-- begin --');

// a >= b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number then compare as numbers

// fill in the blanks to pass the assertions
// there may be more than one correct answer!

const _1_expect = true; // 1 >= 1
const _1_actual = '1' >= 1;
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true; // 1 >= 0
const _2_actual = true >= null;
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true; // false is considered equal to false
const _3_actual = false >= false;
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true; // '0.0' is converted to 0 and 0 >= 0 is true
const _4_actual = '0.0' >= false;
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false; // false is not greater than true
const _5_actual = false >= true;
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true; // '13' is greater than true numerically
const _6_actual = '13' >= true;
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = false; // 'aa' is not greater than 'ab' lexicographically
const _7_actual = 'aa' >= 'ab';
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true; // 'aa' is equal to 'aa'
const _8_actual = 'aa' >= 'aa';
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true; // 0 is converted to '' and '' >= '' is true
const _9_actual = 0 >= '';
console.assert(_9_actual === _9_expect, 'Test 9');

console.log('-- end --');
