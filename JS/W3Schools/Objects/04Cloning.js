const sourceObject = {a:1, b:2, c:3};

// First Method
    // let another = sourceObject;
    // console.log(another);

// Second Method --> FOR LOOP

    // let another = {};
    // for(let key in sourceObject) {
    //     another['a'] = sourceObject['a']; this the for reference
    //     another[key] = sourceObject[key];
    // }
    // console.log(another);

// Third Method --> Object.keys()
    // let another = Object.assign({},sourceObject);
    // console.log(another);

    // let another1 = Object.assign({d : 4 , e : 5},sourceObject)
    // console.log(another1);


// Fourth Method --> Spread Operator
    let another = {
        ...sourceObject
    }
    console.log(another);