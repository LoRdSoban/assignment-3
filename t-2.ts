// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
