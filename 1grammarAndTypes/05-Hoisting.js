//Hoisting
//JS reads through the code twice remembering left hand side of variables and functions


scissors = 'blue';

console.log(scissors);

var scissors;

b();
console.log(a);

function b(){
    console.log('this is all hoisted');
}

var a = 'this is not hoisted';