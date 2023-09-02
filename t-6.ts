// Write a program that uses a function to find the largest element in an array of numbers

function findLargest(numbers: number[]): number {
    let largest: number = numbers[0];
    for (let i: number = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Original: "+numbers);
console.log("Largest: "+findLargest(numbers));
