const newPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve([1,2,3]);
    }, 3000);
})

newPromise.then((result) => {
    console.log(result);
}).catch( (reject) => {console.log(reject);})