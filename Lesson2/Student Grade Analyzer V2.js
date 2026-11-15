// Student Grade Analyzer V2

// 1. Student Class
class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    // Calculate the average using a loop
    getAverage() {
        if (this.scores.length === 0) {
            return 0;
        }

        let sum = 0;

        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }

        return sum / this.scores.length;
    }

    // Determine the letter grade
    getLetterGrade() {
        const average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

// 2. Analyze Class Function
function analyzeClass(students) {

    if (students.length === 0) {
        console.log("No student records available.");
        return;
    }

    let totalAverage = 0;
    let topStudent = null;
    let highestAverage = -1;

    console.log("------- STUDENT REPORT -------");

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const average = student.getAverage();
        const grade = student.getLetterGrade();

        console.log(
            `${student.name} - Average: ${average.toFixed(1)} | Grade: ${grade}`
        );

        // Add to running sum
        totalAverage += average;

        // Find the top-performing student
        if (average > highestAverage) {
            highestAverage = average;
            topStudent = student;
        }
    }

    // Calculate class average
    const classAverage = totalAverage / students.length;

    console.log("-----------------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);

    if (topStudent !== null) {
        console.log(
            `Top Student: ${topStudent.name} with ${highestAverage.toFixed(1)}`
        );
    }
}

// 3. Test Data
const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];

// 4. Convert the data into Student instances
const students = [];

for (let i = 0; i < studentData.length; i++) {
    const student = new Student(
        studentData[i].name,
        studentData[i].scores
    );

    students.push(student);
}

// 5. Run the analyzer
analyzeClass(students);