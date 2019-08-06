let friend = 'Autumn';

switch(friend) {
    case 'Autumn' :
    console.log('Hey Autumn, when are we going rock wall climbing');
        break;
    case 'Dave':
    console.log('Hey Dave, how is cooper?');
        break;
    case'Alecx':
    console.log('Hey Alecx, when are we playing DND');
        break;
    default:
    console.log(`Im sorry, ${friend}, but do I know you?`)
}

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
}

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