interface Person {
    fName : string;
    lName : string;
}

function greeter(person : Person){
    return "Hello, "+person.fName+" "+person.lName;
}

const user : Person = {fName:"Aman",lName:"Ahmed"}; //const user = also works.

alert(greeter(user));