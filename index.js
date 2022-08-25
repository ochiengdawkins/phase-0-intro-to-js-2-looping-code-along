// Code your solutions in this file
// for(let age=30; age<40 ; age++){
//     console.log(`I am ${age} years old. Happy Birthday to me!`);

// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");

function writeCards(namesArray,event) {

  let messageArray = []

  for (let i = 0; i < namesArray.length; i++) {
    messageArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
  

}
console.log(messageArray);
return messageArray
}


function countDown(n) {

  // while loop to count down numbers
  while (n >= 0) {
    console.log(n--);
    
  }
}

countDown();