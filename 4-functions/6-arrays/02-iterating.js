//Iterating

//forEach() method executes a provided function once for each array element.

//forEach() has three arguements: currentValue, the index, and the entire array
//currentValue = the current element being processed in the entire array
//index = the index of the current element being processed
//array = the array the forEach method was called upon

let food = ['Spaghetti', 'Linguini', 'Chicken Wings', 'Pizza', 'Popcorn'];

//food.forEach(f => {console.log(f)})
//food.forEach((f, number) => {console.log(f, number)});
food.forEach((f, number, array) => {console.log(f, number,array)});

let movies = ['2001 Space Odyssey', 'A Clockwork Orange', 'Full Metal Jacket', 'The Shining']

movies.push('Doctor Strangelove');
movies.splice(3, 1, 'Barbie In The Nutcraker');

movies.forEach(movie => {console.log(movies)});

