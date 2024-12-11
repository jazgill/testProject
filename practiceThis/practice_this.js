/*
    “This” keyword refers to an object that is executing/calling the current running function.  
        It references the object that is executing the current function. 
        If the function being referenced is a regular function, 
            “this” references the global object. 
        If the function that is being referenced is a method in an object, 
            “this” references the object itself.
*/

//'This' Keyword refers to an object that is executing the current running function:
//example1 below:
/*
//user object
const user = {
    firstName: "Patrick",
    lastName: "Scott",
    fullName: function () {
        //console.log(this) //will print out the entire object properties.
        console.log(this.firstName + " " + this.lastName);  //this should print out the first and last name from the user object
    }
}
user.fullName(); //in the case 'this' refers to the object left of fullName --> which is 'user' object.  That's why
                 //we are able to do this.firstName and this.lastName as the object calling the function fullName
*/

/* Now let us check the above code with Arrow function.  Arrow functions don't have their own 'This' scope. 
    Arrow function will inherent the scope from the nearest sorrounding regular functions. 
    If there's no nearest or sorrounding function then it is going to use the global scope (it will use window)
Example 2:
const userName = {
    firstName1: "Patrick",
    lastName1: "Scott",
    fullName1: () => {
       // console.log(this) //will print out the entire object properties.
        console.log(this.firstName1 + " " + this.lastName1);  //this should print out the first and last name from the user object
    }
}
userName.fullName1(); */

/* To get arround the above problem where Arrow function don't have it's own 'this' scope and there is no nearest
or sorrounding function, we can define a regular function and then an arrow function within this regular function.
Example 3:
const user = {
    firstName: "Patrick",
    lastName: "Scott",
    fullName: function () {
        const arrowFunction = () => {
            console.log(this) //will print out the user object properties.
            console.log(this.firstName + " " + this.lastName);  //this should print out the first and last name from the user object
        }
        arrowFunction();
    }
}
user.fullName();  //Now in this case the arrowFunction will inherent 'this' scope from the nearest function fullName. 
*/

/*Example 4: now with method within an object

const user = {
    firstName: "Patrick",
    lastName: "Scott",
    hobbies: ["programming", "piano"],
    listHobbies: function () {
        //using 'this' keyword here withing a method, we are able to grab
        //the user hobbies from the user object and loop over those hobbies
        this.hobbies.forEach(function(hobby) { 
            //in this Context the firstName is undefined for a callback funciton.
            //we entered into a new context here, as callback function has it's own scope. 
            //User Object is not calling this callback function, this callback function is called from the global scope, window scope.
            console.log(this.firstName);  
            console.log(hobby);
        }, this)  //We need to pass in a 'this' reference from the listhobbies as an argument into the forEach function.
                  //'this' reference from the listhobbies is pointing to the user object. 
    }
}
user.listHobbies();
*/
/*Example 5: 
How 'this' keyword works with constructor functions. 
Whenever you create a new object using the new keyword, 'this' referres to the object you just created. 
'This' is going  to referes to a particular object that you just created using the 'this' keyword. 
*/
function User(name) {
    this.name = name;
    console.log(this);
} 
const devsage = new User("DevSage");
const codingPhase = new User("CoddingPhase");


/* simple examples below too:
*/                 
var value = 50;

function myFunction () {
    var value = 100;
    console.log("Value without 'This' Keyword: " + value);
    console.log("Value with 'This' Keyword: " + this.value);
}

myFunction();   //in this case the 'This' keyword is referring to a global variable and 
                //not a local variable as part of the function. 

//create an object random
const random = {
    name: "John",
    info() {   //create a method info()
        console.log("Hi my name is: " + this.name);
        //since this keyword is used within a method as defined inside an object, then 'This' keyword references 
        //propery of the same object (in this case property: name). 

    }
}

random.info();

//Example #3

const randomValue = {
    name: "Tutorial",
    video: ["JavaScript", "this", "keyword"],
    someInfo(){
        this.video.forEach(function(tags){
            //note that this.name (this keyword) here is mentioned within the callback function, 
            //which means it is referencing a global variable, but in this context it is not clear to the call back function
            console.log(this.name, tags); 
        }, this)  //in order for it to work we need to pass in the 'this' keyword into forEach function to make it work.
                  //The forEach callback function normally takes in two parameters, 1 is a function and another is an object. 
    }
}
randomValue.someInfo();