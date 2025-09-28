

// // Our array with items
// const colors = ["red", "green", "blue"];

// // Using length property
// const lengthWay = colors[colors.length - 2];
// console.log(lengthWay); // 'green'

// // Using slice() method. Note an array is returned
// const sliceWay = colors.slice(0, 4);

// console.log(`sliceWay`, sliceWay)

// // console.log(sliceWay[0]); // 'green'

// // // Using at() method
// const atWay = colors.at(-5);
// console.log(atWay); // 'green'


const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

// console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1

console.log(num1[0])
// Shallow Copy vs Deep Copy
const arr = num1[0] // [1]
arr.push(4)
console.log(arr) // [1, 4]

num1[0].push(4);
num1.push(5)
console.log(num1) // [[1, 4], 5]
// console.log(numbers);
// results in [[1, 4], 2, [3]]