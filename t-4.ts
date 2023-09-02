// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}

console.log("Area of circle with radius 5: "+calculateArea(5));