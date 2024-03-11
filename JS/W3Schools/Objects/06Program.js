let scores = [10,20,30,20,3,0,10,50,20,3,10,3,10,10,3,0,3,10];


    let eleCount = {};
    scores.forEach(val => eleCount[val] = (eleCount[val] || 0) + 1);
    console.log(eleCount);

