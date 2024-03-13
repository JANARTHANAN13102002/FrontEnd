// const set2 = new Set(['a','b']); // Passing an Array to new Set()

// Create a new Set and use add() to add values
    // const set1 = new Set();
    // set2.add('a');
    // set2.add('b');


// Create a new Set and use add() to add variables
    // let var1 = 'a';
    // let var2 ='b';
    // const set3 = new Set();
    // set3.add(var1);
    // set3.add(var2);


// forEach() Method
    // const letters = new Set(['a','b','c','d']);
    // let text="";
    
    // letters.forEach(function(value){
    //     text += value;
    // })
    // console.log(text);

    //             (or)

    // letters.forEach(myfunction);
    // function myfunction(value) {
    //     text += value;
    // }


// Values()
    // const ad = new Set(['add','ball','catch']);
    // let text = "";

    // for(let x of ad) {
    //     for(let i of x)
    //         console.log(i);
    // }

// keys() Method
    // const arr =new Set(['a','b']);
    // console.log(arr.keys());

// entries() Method
    // A Set has no keys.
    // entries() returns [value,value] pairs instead of [key,value] pairs.
  
    // const letters = new Set(['a','b','c']);
    // let con = letters.entries();

    // for(let x of con)
    //     console.log(x);

    // o/p --> [ 'a', 'a' ]
    //         [ 'b', 'b' ]
    //         [ 'c', 'c' ]



// Sets are Objects
    // const letters = new Set(['a','b']);
    // console.log(typeof letters);
    // console.log(letters instanceof Set);