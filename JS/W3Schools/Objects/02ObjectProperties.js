const person = {firstname:"jana" , lastname :"B", age:22};

// console.log(person["firstname"] + " " + person["age"]);

// FOR LOOP
    // for(let i in person) {
    //     console.log(person[i]);
    // }

// Adding New Properties
    // person.nationality = "Indian";
    // console.log(person);

    // o/p --> { firstname: 'jana', lastname: 'B', age: 22, nationality: 'Indian' }


// Deleting Properties
    // delete person.age;
    // console.log(person);

    // o/p --> { firstname: 'jana', lastname: 'B', nationality: 'Indian' }



// Nested Objects

    const arr = {
        Name : "JANARTHANAN B",
        Age : 22,
        Locations : {
            City : "Coimbatore",
            State : "Tamil Nadu",
            Country : "India"
        }
    }

    // console.log(arr);

    // o/p --> 
    //  {
    //     Name: 'JANARTHANAN B',
    //     Age: 22,
    //     Locations: { City: 'Coimbatore', State: 'Tamil Nadu', Country: 'India' }
    //   }

    // console.log(arr.Locations.City);
    // console.log(arr.Locations["State"]);
    // console.log(arr["Locations"]["Country"]);

    // o/p --> Coimbatore
    //         Tamil Nadu
    //         India

    

    const myObj = {
        name : "jana",
        age : 22,
        cars : [
            {name:"Ford" , models : ["Fiesta", "Focus", "Mustang"] },
            {name:"BMW", models:["320", "X3", "X5"]},
            {name:"Fiat", models:["500", "Panda"]}
        ]
    }

    for(let i in myObj.cars)
    {
        console.log(myObj.cars[i].name);
        for(let j in myObj.cars[i].models)
            console.log(myObj.cars[i].models[j]);
    }

