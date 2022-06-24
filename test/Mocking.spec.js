var MockingDemo = require("./Mocking")
var sinon = require("sinon")
var chai = require("chai")
var expect = chai.expect
var myObj = new MockingDemo()


describe("Test suit for spying", () => {
    it("spy the add method", () => {
       let spy = sinon.spy(myObj, "add");
       let arg1 = 10, arg2 = 20;
       myObj.callAnotherFn(arg1, arg2);
       // sinon.assert.calledOnce(spy);
       expect(spy.calledOnce).to.be.true;
       expect(spy.calledWith(arg1, arg2)).to.be.true;
    });
});

// describe.skip("Test suit for mock", () => {
//     it("Mock the sayHello method", () => {
//         let mock = sinon.mock(myObj);
//         let expectation = mock.expects("sayHello");
//         expectation.exactly(1);
//         expectation.withArgs("Hello World!")
//         myObj.callAnotherFn(10, 20);
//         mock.verify();
//     });
// });

// describe.skip("Test suit for stub", () => {
//     it("stub the add method", () => {
//        let stub = sinon.stub(myObj, "add");
//        stub.withArgs(10, 20).returns(100);
//        expect(myObj.callAnotherFn(10, 20)).to.be.equal(100)
//     });
// });