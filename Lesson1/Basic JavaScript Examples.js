// Lesson 1: Basic JavaScript Examples
// Practice with variables, input-like values, conditions, loops, and functions.

// 1. Variables
const studentName = "Ana";
const age = 19;
console.log("Name:", studentName);
console.log("Age:", age);

// 2. Conditional statement
const score = 85;

if (score >= 75) {
    console.log("Result: Passed");
} else {
    console.log("Result: Failed");
}

// 3. For loop
console.log("Counting from 1 to 5:");
for (let number = 1; number <= 5; number++) {
    console.log(number);
}

// 4. Function
function calculateArea(length, width) {
    return length * width;
}

console.log("Rectangle area:", calculateArea(5, 4));