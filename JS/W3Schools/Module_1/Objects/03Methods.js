const person = {
    fname : "Jana",
    lname:"B",
    age:22,
    fullName : function(){
        return this.fname + " "+this.lname;
    }
}


// Adding a Method to an Object
    person.fathername = function() {
        return "kmyhkm";
    }

// Built-In Methods
console.log(person.fullName().toUpperCase());
console.log(person.fathername());

