// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve([1,2,3]);
//     }, 3000);
// })

// newPromise.then((result) => {
//     console.log(result);
// }).catch( (reject) => {console.log(reject);})

const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                return reject('negative value is not accepted')
            }
            resolve (a+b)
        }, 2000)
    })
}

const doWork = async() => {
    const sum =  await add(1,3)
    console.log('sum:' + sum)
    return sum
}

doWork().then((result) => {
    console.log(result)
})

console.log('this should go first')