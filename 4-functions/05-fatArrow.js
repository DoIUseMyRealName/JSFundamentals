let hi = () => {
    console.log('hello!')
}

hi ();

//Fat Arrow => signifies a function

let hi = () => console.log('Hi!');
hi();
let apples = x => console.log(`There are $(x) apples in the basket.`);
apples(10);

let apples = (x) => {
    console.log(`There are $(x) apples in the basket.`);
}
apples(12);