//Async/Await = Async = makes a function return a promise
//              Await = makes a function wait for a promise

//  Allows you to write async code in a synchronous manner
//  Async doesn't have resolve or reject parameters
//  Everything after Await is placed in an event queue
//  Await can only be used inside an async function

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;

      if (dogwalked) {
        resolve(`You walk the dog 🐕`);
      } else {
        reject("You didn't walk the dog 🐕");
      }
    }, 3000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve(`You clean the kitchen 🍽️`);
      } else {
        reject("You didn't clean the kitchen 🍽️");
      }
    }, 1500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = false;

      if (trashTakenOut) {
        resolve(`You take out the trash ♻️`);
      } else {
        reject("You didn't take out the trash 🚮");
      }
    }, 4000);
  });
}

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log('You finished all the chores 🥳');
    }
    catch(error){
        console.log(error);
    }
    
}


doChores()


