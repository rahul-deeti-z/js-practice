const fun = () => {
    setTimeout(sayHello, 5000, 5);
}

const sayHello = (howManyTimes) => {
    for(i = 0; i< howManyTimes; i++) {
        console.log("Hello ", i);
    }
}