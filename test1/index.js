function greeter(person) {
    return "Hello, " + person.fName + " " + person.lName;
}
var user = { fName: "Aman", lName: "Ahmed" };
alert(greeter(user));
