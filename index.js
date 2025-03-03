// Write your solution here!
// index.js

// Define the initial array
let cats = ["Milo", "Otis", "Garfield"];

// Destructive functions
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive functions
function appendCat(name) {
  return [...cats, name]; // Returns a new array with the new cat appended
}

function prependCat(name) {
  return [name, ...cats]; // Returns a new array with the new cat prepended
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array with the last cat removed
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array with the first cat removed
}

// Export all functions and variables to be used in the test
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
