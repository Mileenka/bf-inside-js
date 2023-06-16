'use strict';

console.log('-- begin --');

const word = 'pitsicola';

let index = 0;
while (index < word.length) {
  const nextLetter = word[index];
  if (nextLetter === 'i' || nextLetter === 's' || nextLetter === 'c' || nextLetter === 'l') {
    console.log(index + ': ', nextLetter); // i, s, c, l
  }
  index += 1;
}

console.assert(index === word.length, 'there are this many letters in the word');

console.log('-- end --');
