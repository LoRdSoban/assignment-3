// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Original: "+numbers);
for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1);
    }
}

console.log("Odd numbers: "+numbers);