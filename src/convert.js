const readlineSync = require("readline-sync");

let originUnit = "";
let destinationUnit = "";
let value = NaN;
let output = 0;

console.log();

while (originUnit !== "miles") {
  originUnit = readlineSync.question("Enter an origin unit: ");
}

do {
  destinationUnit = readlineSync.question("Enter a destination unit: ");
}
while (destinationUnit !== "inches" || destinationUnit !== "feet" || destinationUnit !== "yards");

while (Number.IsNaN(value) === true) {
  value = Number(readlineSync.question("Enter a value: "));
}

if (destinationUnit === inches) {
  output = value * 63360
  console.log("\nThere are " + output + " inches in " + value + " miles.")
}

if (destinationUnit === feet) {
  output = value * 5280
  console.log("\nThere are " + output + " feet in " + value + " miles.")
}
if (destinationUnit === yards) {
  output = value * 1760
  console.log("\nThere are " + output + " yards in " + value + " miles.")
}
