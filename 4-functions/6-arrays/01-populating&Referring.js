//ARRAYS

//Arrays are containers that hold lists of items of various data types

let list = [ 'item1, 'item2', 'item3'];
//   (1)   (2)  (3)

//1- Name of the array or list;
//2- The array is inside of these square brackets
//3- Each item, regardless of data type, is seperated by commas

console.log(list(1));

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Josh', 'Eric', 'Sam']];

console.log(typeof students); //object
console.log(students instanceof array); //True

console.log('Hello', students [6][2], 'how are you today?');

//Populating

let food = ['Spaghetti', 'Linguini', 'Chicken Wings', 'Pizza', 'Popcorn'];

food.push('Tacos');
food.splice(1, 1, 'Bananas')
food.splice(2,0 'Sweet Potato Pie');
food.pop();
food.shift();
food.unshift('Fruit Snacks');
for (pasta of food) {
    console.log(pasta);
};

