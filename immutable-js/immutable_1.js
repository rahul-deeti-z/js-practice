// import Immutable from "immutable";

// function fun() {
//     let obj = [{id: "1"}, {id : "2"}]

//     let modifiedObj = Immutable.fromJS(obj);
//     console.log(modifiedObj.get(0));
// }

// fun();

function fun2() {
    let arr = [
      { name: "string 1", value: "this", other: "that" },
      { name: "string 2", value: "this", other: "that" },
    ];

    let obj = arr.find((o) => o.name === "string 2");
    if(obj)
      console.log('hello');
    console.log(arr.indexOf(obj));
}

fun2();

