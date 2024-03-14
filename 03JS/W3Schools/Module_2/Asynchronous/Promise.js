// Example 1 :

    // const promise = new Promise((resolve, reject) => {
    //     resolve("We can did it") --> if reject is commented then the O/P --> We can did it
    //     reject("Nooooooooooo"); --> if resolve is commented then the O/P --> Nooooooooooo
    // })

    // promise
    //     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

// Example 2 : 
    // const promise = new Promise((resolve,reject) => {
    //     resolve({user : "Hiiiiiiii"});
    // })

    // promise.then((data) => {
    //     return data;
    // })
    // .then((user) => {
    //     console.log(user);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })

    // O/P --> { user: 'Hiiiiiiii' }



// Example 3 :

    // const promise = new Promise((resolve,reject) => {
    //     resolve({user : "Jana"});
    // })

    // promise.then((data) => {
    //     const user = data ;
    //     return fetch("https://jsonplaceholder.typicode.com/todos/1")
    // })
    // .then((user) => {
    //     console.log(user);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })

    // O/P ----->  [Symbol(realm)]: null,
    //             [Symbol(state)]: {
    //             aborted: false,
    //             rangeRequested: false,
    //             timingAllowPassed: true,
    //             requestIncludesCredentials: true,
    //             type: 'default',
    //             status: 200,
    //             timingInfo: {
    //                 startTime: 63.744000017642975,
    //                 redirectStartTime: 0,
    //                 redirectEndTime: 0,
    //                 postRedirectStartTime: 63.744000017642975, 
    //                 finalServiceWorkerStartTime: 0,
    //                 finalNetworkResponseStartTime: 0,
    //                 finalNetworkRequestStartTime: 0,
    //                 endTime: 0,
    //                 encodedBodySize: 71,
    //                 decodedBodySize: 0,
    //                 finalConnectionTimingInfo: null
    //             },
    //             cacheState: '',
    //             statusText: 'OK',
    //             headersList: HeadersList {
    //                 [Symbol(headers map)]: [Map],
    //                 [Symbol(headers map sorted)]: null
    //             },
    //             urlList: [ [URL] ],
    //             body: { stream: undefined }
    //             },
    //             [Symbol(headers)]: HeadersList {
    //             [Symbol(headers map)]: Map(25) {
    //                 'date' => [Object],
    //                 'content-type' => [Object],
    //                 'transfer-encoding' => [Object],
    //                 'connection' => [Object],
    //                 'report-to' => [Object],
    //                 'reporting-endpoints' => [Object],
    //                 'nel' => [Object],
    //                 'x-powered-by' => [Object],
    //                 'x-ratelimit-limit' => [Object],
    //                 'x-ratelimit-remaining' => [Object],       
    //                 'x-ratelimit-reset' => [Object],
    //                 'vary' => [Object],
    //                 'access-control-allow-credentials' => [Object],
    //                 'cache-control' => [Object],
    //                 'pragma' => [Object],
    //                 'expires' => [Object],
    //                 'x-content-type-options' => [Object],      
    //                 'etag' => [Object],
    //                 'via' => [Object],
    //                 'cf-cache-status' => [Object],
    //                 'age' => [Object],
    //                 'server' => [Object],
    //                 'cf-ray' => [Object],
    //                 'content-encoding' => [Object],
    //                 'alt-svc' => [Object]
    //             },
    //             [Symbol(headers map sorted)]: null
    //             }
    //         }


// Example 4 :

    // fetch("https://jsonplaceholder.typicode.com/todos/")
    // .then((data) => {
    //     return data.json();
    // })
    // .then((user) => {
    //     console.log(user);
    // })
    // .catch((err) => {
    //     console.log("Something Went Wrong");
    // })
    // .finally(() => {
    //     console.log("Finally Block");
    // })

    // O/P ->  {
    //             userId: 5,
    //             id: 100,
    //             title: 'excepturi a et neque qui expedita vel voluptate',
    //             completed: false
    //         },
    //         ... 100 more items
            
    //         Finally Block
    //         Hiiiiiii