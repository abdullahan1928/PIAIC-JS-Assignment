var country = "USA";
var country2 = "UK";

console.log('Is country == country2? ' + (country == country2));
console.log('Is country != country2? ' + (country != country2));

var fruit = "apple";
var fruit2 = "Apple";
console.log('Is fruit == fruit2? ' + (fruit == fruit2));
console.log('Is fruit != fruit2? ' + (fruit != fruit2));

var number = 5;
var number2 = 5;
var number3 = 6;
console.log('Is number == number2? ' + (number == number2));
console.log('Is number != number3? ' + (number != number2));

console.log('Is number == number2? and number2 == number3? '
    + (number == number2 && number2 == number3));
console.log('Is number == number2? or number2 == number3? '
    + (number == number2 || number2 == number3));

var myArray = [1, 2, 3, 4, 5];
console.log('Does 5 exist in myArray? ' + (myArray.indexOf(5) > -1));
console.log('Does 6 exist in myArray? ' + (myArray.indexOf(6) > -1));