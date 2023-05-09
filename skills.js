// # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
// printNumbersDivisibleByThree();


// # Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// # Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
// console.log(computeSum([2, 4, 5]));

// # Start with the hash: city_populations = {chi: 2700000}
var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]

// console.log(cityPopulations);



// # Write a method that prints out every number from 1 to 100. 

function printOneToOneHundred() {
  var i = 1;
  
  while (i < 101) {
    console.log(i); 
    i += 1;
  }
}

// printOneToOneHundred();



// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function printEveryOtherNumber() {
var i = 1

while (i < 100) {
    console.log (i);
    i += 2;
  }
}

// printEveryOtherNumber();


// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function countToFiftyFive() {
  var numbers = [1, 55, 3, 55, 8, 10, 55];
  var count = 0;

  numbers.forEach(function(number) {
    if (number === 55) {
      count += 1;
    }
  });
  console.log(count);
}

// countToFiftyFive();
// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

function awesomeSauce() {

  var letters = ["a", "b", "c", "d", "e"];
  var newArray = [];

  letters.forEach(function(letter) {
    newArray.push(letter);
    newArray.push("Awesomesauce");
  });

  console.log(newArray);
}

// awesomeSauce();


// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}

let itemAmounts = {chair: 5, table: 2};

itemAmounts["chair"] = 3;

// console.log(itemAmounts);





// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}

let otherAmounts = {chair: 5, table: 2};

otherAmounts["desk"] = 7;

// console.log(otherAmounts);


// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factor(numbers) {
  var number = "";
  
  while (number > 0) {
    number = ((number - 1) * number);
}
}

// console.log(5);



// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

function addArrays() {

  var firstArray = [1, 5, 10];
  var secondArray = [100, 500, 1000];
  var thirdArray = [];

  firstArray.forEach(function(first) {
    secondArray.forEach(function(second) {
      thirdArray.push(first + second);
    });
  });
  console.log(thirdArray);
}

addArrays();
