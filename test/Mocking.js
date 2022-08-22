class Mocking
{
    constructor() {
        console.log("initiate");
    }

    sayHello(str) {
        console.log(str);
    }

    add(arg1, arg2) {
        console.log("add method has been called");
        let result;
        result = arg1 + arg2;
        return result;
    }

    callAnotherFn(arg1, arg2) {
        this.sayHello("Hello World!");
        let result = this.add(arg1, arg2);
        console.log(result);
        return result;
    }

    callTheCallback(callback) {
        callback();
    }

    testPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(2), 500);
        }).then((result) => result * 3).then((result) => result*3)

        // return new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(2), 1000);
        // });

    }

    // same function with async await

    // async testPromise() {
    //     const result = await new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(1), 5000);
    //     });
    //     return result * 5;
    // }
}

module.exports =  Mocking;