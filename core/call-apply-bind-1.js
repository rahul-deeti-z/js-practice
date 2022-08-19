let name1 = {
    firstName: "Rahul",
    lastName: "Deeti",
}

let printFullName = function (homeTown, state) {
    console.debug(this.firstName+" "+this.lastName + " from "
     + homeTown + ", "+ state);
}

let name2 = {
    firstName: "Vijay",
    lastName: "Verma"
}

let name3 = {
    firstName: "Shiva",
    lastName: "Krishna"
}
// function borrowing
printFullName.call(name1, "Siriclla", "Telanagana");

// only difference between call and apply is the way we pass arguments
printFullName.apply(name2, ["Banglore", "Karnataka"]);

// bind method
/* bind method binds this method printFullName with an object
and returns us the copy of that method */

let printMyName = printFullName.bind(name3, "Dehradun", "Uttarakhand");
// console.debug(printMyName);
printMyName();


