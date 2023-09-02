"use strict";
// Write a program that uses a function to find the largest element in an array of numbers
function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original: " + numbers);
console.log("Largest: " + findLargest(numbers));
