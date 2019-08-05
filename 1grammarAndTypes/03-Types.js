//Types

//Booleans

//Boolean is 'binary' aka yes/NO

let i=true;

let j=false;

let on=true;

let off=false;

console.log(on, off);

// * Null 
//* Null =empty value

let empty=null;

console.log(empty);

//*Undefined
//*Undefined=no value whatsoever, NOT AN ERROR

let undef= undefined;
console.log(undef);

//* Number

let degrees=90;

console.log(degrees);

let precise=9999999999999999999999999999999999999999999999999999999999999999999999999999;
console.log<precise);

Let rounded = 9999999999999999;


console.log(rounded);

let notquite= 0.2 = 0.1;
console.log(notQuite);

let numbersAreHards= (0.2 * 10 + 0.1) /10;
console.log(numbersAreHard);

let a = Number('123')
console.log(a)

//*Strings

//*Strings are data types used to represent text

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

//*Objects
//*Container which holds multiple commands uses {}

let car={
color: 'red',
tires: 4,
Extas: 'AC, and Radio'
cool: True
};

console.log(car);
console.log(typeof car);

//* Array
//Another kind of container which holds lists of items []

let list=['item1', 'item2', 'item3'];
// (1)  (2)  (3)
//1-Name of the array
//2-Array is inside of these square brackets
//3-each time, no matter the data type, is seperated by commas

let burritos= ['large', 4, true];

console.log(burritos);

console.log(typeof burritos);

//Addition VS Concatenation
/* When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
 when it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator-
 -it smashes the values together without trying to synthesize the values
*/

let third= 1050 + '100';
console.log(third);

let firstName = 'Connor';
let lastName = 'Wolfford';
let houseNumber = '15739';
let street = 'Tundra Pointe';
let city = 'Noblesville';
let state = 'Indiana';
let zipcode = '46038'

console.log('Hi, my name is' ' + firstName, lastName + ' ' + houseNumber, apartmentNumber + ' ' + street, city, state, zipcode + ');

let myName = 'Connor'
console.log(myname.length)

let myNameIs = 'Connor';
console.log(mynameis.toUpperCase());

let home = 'my home is Noblesville';
console.log(home.includes('indianapolis'));

let sent ='this sentence will be split into indivisual parts'
console.log(sent.split(' ');