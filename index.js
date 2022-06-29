// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
//  }

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts){
//    for (let i = 0; i < gifts.length; i++){
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
//    }

//    return gifts;
//}

//wrapGifts(gifts);

//Assignment Starts Here

const card = ["name1", "name2", "name3"];
const card2 = ["eventName"];
const newArray = ["message1", "message2", "message3"]

function writeCards(card, card2) {
  for (let i = 0; i < card.length; i++) {
    newArray.splice(i, 1, (`Thank you, ${card[i]}, for the wonderful ${card2} gift!`));
    console.log(`Thank you, ${card[i]}, for the wonderful ${card2} gift!`);
    debugger;
  }

  return newArray;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(counter){
    let i = counter;
    while (i >= 0){
        console.log(i);
        i--;
    }

    return i;
}


countDown(10);

countDown(4);


