function hi() {
    console.log('HI!');
}

hi();
//This is how to call/invoke a function

function numbers() {
    for(let i=0; i<=10; i+=1) {
        console.log(i)
    }
}

numbers();

let arr = ['This', 'Is', 'Really', 'Cool'];

function tooth() {
    for(let word in arr){
        console.log(arr[word]);
    }
}

tooth();

