//  Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

var n: number = 10
var sum: number = 0
let i

for (i = 1; i <= n; i++) {
    if (i%2 == 0) {
        sum += i
    }
}

console.log(`The sum of even numbers from 1 to ${n} is ${sum}`)