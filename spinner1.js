// process.stdout.write('hello from spinner1.js... \rheyyy\n')

const fullSpinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;

for (const char of fullSpinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 100;
}

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);