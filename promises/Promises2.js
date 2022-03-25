let cleanRoom = () => {
  return new Promise((resolve, reject) => {
    resolve("Cleaned the room ");
  });
};

let removeGarbage = (args) => {
  return new Promise((resolve, reject) => {
    resolve("Removed Garbage " + args);
  });
};

let winIcecream = (args) => {
  return new Promise((resolve, reject) => {
    resolve("Won Icecream " + args);
  });
};

cleanRoom()
  .then((args) => {
    return removeGarbage(args);
  })
  .then((args) => {
    return winIcecream(args);
  })
  .then((args) => {
    console.log(args);
    console.log("finished");
  });

console.log("Hello world");
