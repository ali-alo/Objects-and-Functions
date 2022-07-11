// Create a car object, add a color property to it with the value equals 'black'
const car = {
  color: "black",
};

// Change the color property of the car object to 'green'
car.color = "green";

// Add the power property to the car object, which is a function and displays the engine power to the console
car.power = 220;
car.getPower = function () {
  console.log(this.power);
};

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding
// the number of accepted pears and apples
const countTotalFruits = (pears, apples) => pears + apples;

// Your name is saved in the payment terminal, write a function to define the name in the terminal (if
// you entered your name, then hello + name, if not, then there is no such name)
function greeting(name) {
  if (name) {
    console.log(`Hello ${name}!`);
  } else {
    console.log("You didn't specify name");
  }
}

// Write a function for calculating the type of argument and type output to the console
function getArgumentType(arg) {
  console.log(typeof arg);
}

// Write a function that determines whether a number is prime or not

// simple and working solution
function isNumberPrime1(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// alternative solution which might be more appopriate for big prime numbers
function isNumberPrime2(num) {
  let result = true;
  const divisionList = [2, 3, 5, 7];

  if (num !== 2 && num !== 3 && num !== 5 && num !== 7)
    result = !divisionList.some((denominator) => num % denominator === 0);
  return result;
}
