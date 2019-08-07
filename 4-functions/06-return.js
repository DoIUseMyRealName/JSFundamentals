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