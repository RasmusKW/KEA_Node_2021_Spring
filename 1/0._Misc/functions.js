function myFirstFunction () {
    return "Hello There"

}

const myVariableFunction = function () {
    console.log("Hello there from anon function.");
    function within() {

    }
}
//arrow functions declare the "this" keyword differentyl, binds it to the scope of the function
const myArrowFunction = () => {
    console.log("Hello from arrow function");
}


function sayHiLater(anyFunctionReference) {
    //simulate some code running
    //takes some time..
    //and more time..
    anyFunctionReference();
}

const myFunc = () => {
    console.log("Hi");
}

sayHiLater(myFunc);


function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => "Poke: " + name;

interact(poke, "Bertil")

interact(function hug(name){ return"Hug: " + name}, "Napster");