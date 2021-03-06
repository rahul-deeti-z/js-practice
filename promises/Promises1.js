let promiseToCleanTheRoom = new Promise((resolve, reject) => {
  //clean the room
  let isClean = true;

  if (isClean) {
    resolve("clean");
  } else {
    // console.log("Hello world");
    reject("not clean");
  }
});

promiseToCleanTheRoom
  .then((fromResolve) => {
    console.log("The room is " + fromResolve);
  })
  .catch((fromReject) => {
    console.log("The room is " + fromReject);
  });

console.log("hello");


// Promise class takes callback function as arguement
// That Callback function takes resolve, reject as it's arguments
// "then" method has a callback function as argument, we can pass value to from resolve to this callback function

//Simple syntax

  // promiseObj.then().catch()
