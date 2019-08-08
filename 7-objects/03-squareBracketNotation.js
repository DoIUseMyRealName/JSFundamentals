// SQUARE BRACKET NOTATION

// Square bracket notation can help us be able to find a value in an object. This way can be handy if we need to set a key to a variable and then use that variable to parse through an object
// It works because of the fact that all property keys( before the colon) are strings

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    "water": true,
    sun: true,
    size: 10
  };

  //console.log(garden.vegetable);
let x = 'vegetable';
console.log(garden.x, garden[x]); //undefined, Zucchini

let baking = {};
baking['zucchini'] = 'better make some bread!'; //We can set a key value using square brackets
console.log(baking)

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    "water": true,
    sun: true,
    size: 10
  };