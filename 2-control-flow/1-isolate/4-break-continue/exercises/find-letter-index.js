'use strict';

console.log('-- begin --');

const word = 'pitsicola';
const targetLetter = 'c'; // Replace '_' with the target letter

let index = 0;
while (true) {
  const nextLetter = word[index];
  console.log(index + ': ' + nextLetter);

  if (nextLetter === targetLetter) {
    break; // Exit the loop if the target letter is found
  }

  index += 1;
}

console.assert(index === 5, 'this letter is at index 5');

console.log('-- end --');
