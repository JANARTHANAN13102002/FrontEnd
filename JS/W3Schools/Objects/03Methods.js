const person = {
    fname : "Jana",
    lname:"B",
    age:22,
    fullName : function(){
        return this.fname + " "+this.lname;
    }
}

console.log(person.fullName().toUpperCase());

// Built-In Methods