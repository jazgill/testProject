var value = 50;

function myFunction () {
    var value = 100;
    alert("Value without 'This' Keyword: " + value);
    alert("Value with 'This' Keyword: " + this.value);
}

myFunction();   //in this case the 'This' keyword is referring to a global variable and 
                //not a local variable as part of the function. 

//create an object random
const random = {
    name: "John",
    info() {   //create a method info()
        console.log("Hi my name is: " + this.name);
        //since this keyword is used within a method as part of an object, then 'This' keyword is referrring to a 
        //propery of the same object. 

    }
}

random.info();

//Example #3

const randomValue = {
    name: "Tutorial",
    video: ["JavaScript", "this", "keyword"],
    someInfo(){
        this.video.forEach(function(tags){
            //if we only add this.name here, it is referring to global propery of name inside the object, 
            //however we are calling 'this' as part of the function within an object, function doesn't know 
            //the value of 'this.name', thus it won't work.
            console.log(this.name, tags); 
        }, this)  //in order for it to work we need to pass in the 'this' keyword into forEach function to make it work.
    }
}
randomValue.someInfo();