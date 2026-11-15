// Student Grade Analyzer

// Student scores   
let scores = [95, 87, 78, 72, 90, 65, 84, 76];

// Display all student scores
console.log("===== STUDENT GRADE ANALYZER =====");
console.log("\nStudent Scores:");

for (let i = 0; i < scores.length; i++) {
    console.log("Student " + (i + 1) + ": " + scores[i]);
}

// Variables
let total = 0;
let highest = scores[0];
let lowest = scores[0];     
let passed = 0;
let failed = 0;

console.log("\n===== GRADE RESULTS =====");

// Analyze each student's score
for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let grade;

    // Determine grade
    if (score >= 90 && score <= 100) {
        grade = "Excellent - passed";
    } else if (score >= 80) {
        grade = "Very Good - passed";
    } else if (score >= 75) {
        grade = "Good - passed";
    } else {
        grade = "Failed";
    }

    // Count passed and failed students
    if (score >= 75) {
        passed++;
    } else {
        failed++;
    }

    // Calculate total
    total += score;

    // Find highest score
    if (score > highest) {
        highest = score;
    }

    // Find lowest score
    if (score < lowest) {
        lowest = score;
    }

    console.log(
        "Student " + (i + 1) +
        ": " + score +
        " - " + grade
    );
}

// Calculate average
let average = total / scores.length;

// Display results
console.log("\n===== SUMMARY =====");
console.log("Total Score: " + total);
console.log("Average Score: " + average.toFixed(2));
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);