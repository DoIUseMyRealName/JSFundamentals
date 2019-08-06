// Local scope Indianapolis
//Global scope The World

/* Scope refers too where a variable is defined and accessible.
-Javascript has function scope: each function creats a new scope
-Scope determines the visibility of these variables
-variables defined inside a function are not visible from outside the function
*/

var x= 12;

function scope () {
    var x = 33;
    console.log('inside function',x)
}

scope();
console.log('outside function', x)