'use strict';

console.log('-- begin --');

/* Stepping Down

  Stepper Variables change systematically,
    going through a series of values for control flow

  "Stepper" describes how you are using a variable
    this term is not a JavaScript thing
    it's a general programming concept

  for loops are designed for stepping
    i is the stepper in this exercise


  fill in the loop condition and update the stepper variable

*/

const holiday = 'winter solstice';
const message = ' ' + holiday;

let tweet = '';
for (let daysToHoliday = 14; daysToHoliday >= 0; daysToHoliday--) {
  if (daysToHoliday === 1) {
    tweet = daysToHoliday + ' day remaining until' + message;
  } else if (daysToHoliday === 0) {
    tweet = 'Today is' + message;
  } else {
    tweet = daysToHoliday + ' days remaining until' + message;
  }
  console.log(tweet);
}

console.assert(
  tweet === 'Today is winter solstice',
  'There are 0 days remaining',
);

console.log('-- end --');
