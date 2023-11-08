const numbers = [4, 9, 16, 25];
const newNumbers = numbers.map(Math.sqrt);

//console.log(numbers);
//console.log(newNumbers);

function myFunction(num) {
    return num * 10;
}

const newNumbers2 = numbers.map(myFunction);
console.log(newNumbers2);