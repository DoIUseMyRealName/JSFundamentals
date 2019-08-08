let hi = () => {
    return 'hi';
};

let newName = hi();

console.log(newName);

let capitalizedName = (name) => {
    let capName='';
    for (let letter in name){
        if(letter == 0){
            capName =+ name[letter].toUpperCase();
        }else{
            capName += name[letter].toUpperCase();
        }
    }
    return capName;
}

const myName= capitalizedName('Connor');
console.log(myName + ' how are you doing?');

/*
Challenge:
Make a tip calculator using a function
Have it RETURN the value 
Capture that returned value in a VARIABLE
Print that variable
*/

let tip = (amount) => {
    return='';
};

let tipCalc = (price) => {
    let tipPercent = 0.15;
    let tip= price * tipPercent;
    return tip;
}

let tipDinner = tipCalc(100);
console.log(tipDinner);

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

let studentName = "pAuL";
let capName;

for (let x in studentName) {
   if (x == 0) {
      capName = studentName[x].toUpperCase();
      } else {
      capName += studentName[x].toLowerCase();
   }
}
console.log(capName);

blah = function () {
    return lala;
    lala = "hi";
  };
  console.log(blah());

  function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2, 3, 4));

  function foo () {
    return bar();
    function bar() {
      return "Poppin' bottles";
    }
  }
  console.log(foo());

  function whatDoesItDo(val) {
    return val ? 1 : 2;
  }; 

  function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());