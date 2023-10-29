//function expression1
const add = function(a, b) {
    return a + b;
  };
  
  console.log(add(3, 5)); // Output: 8

  // function expression2
const calculate = function(operation, a, b) {
return operation(a, b);
};

const multiply = function(x, y) {
return x * y;
};

console.log(calculate(multiply, 4, 6)); // Output: 24

//