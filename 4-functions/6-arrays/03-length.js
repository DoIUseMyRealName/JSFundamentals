//Length and others

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);
console.log(colors.toString());

console.log(typeOf colors.toString());

let numbers = [1,2,3,4,5]
numbers.reverse();
if(numbers instanceOf Array === true){
    let revNumbers = numbers.reverse();
    revNumbers.forEach(number => console.log(number))
}