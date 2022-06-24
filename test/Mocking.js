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
}

module.exports =  Mocking;