let number=6;

if (number>0){
    console.log(`true`)
} else {
    console.log(`false`)
}

(number>0) if console.log(true) else  console.log(false)

if(number=0) {
    console.log(`Number is 0`);
} else if(number>=5) {
    console.log(`Number is bigger than 5`);
} else if (number <= 0){
    console.log(`Number is smaller than 0`);
}

(number == 0) if console.log(`Number is a 0`) else (`number >=5`) if console.log (`Number is bigger than 5`) else
(number <0) if console.log(`Number is smaller than 0`) else console.log(`Nope`)

let age = 18;
switch(true){
    case (age >= '25') :
        console.log(`Yay! You can rent a car`);
    break;
    case (age >= '21') :
        console.log(`Yay! You can drink!`);
    break;
    case (age >= '18') :
        console.log(`Yay! You can vote`);
    default:
        console.log(`Sorry, youre too young to do anything`);
}

let age = 18;

(age>=25) ? console.log(`Yay! you can rent a car now`) : (age>=21) ? console.log(`Yay you can drink`) : (age >=18) ? console.log(`Yay! you can vote`) : console.log(`sorry youre too young to do anything`)