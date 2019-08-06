let age = '21';

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

 /*if(age >= 25){
    console.log('Yay! You can rent a car');
}
else if(age >= 21){
    console.log('Yay! You can drink');
}
else if (age>=18){
    console.log('Yay you can vote!');
}

else {
    console.log('sorry youre too young to do anything')
}

//Start with strictest requirements


let menu = `pie`

switch(menu){
    case 'pie' :
    console.log(`Pie, Pie oh me oh my`);
    break;
    case 'Cake' :
    console.log(`Cake is great`);
    break;
    case 'Ice Cream' :
    console.log(`I scream for ice cream`);
    default:
    console.log(`Not on the menu`);
}     */