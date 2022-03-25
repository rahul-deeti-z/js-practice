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

// function temp() {
//   console.log("Inside temp");
// }
// temp();
