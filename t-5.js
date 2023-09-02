"use strict";
// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
var grades = [100, 50, 75, 80, 90, 45, 30, 20, 10, 0];
console.log("Original: " + grades);
for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
        grades.splice(i, 1);
    }
}
console.log("Passing grades: " + grades);
