const name = ['viet', 'anton', 'mama']
const geocode = (address, callback) => {
    setTimeout(()=>{
        const data = {
            lattitude: 0,
            longitude: 0
        }
        callback(data)
    }, 3000)
}

const data = geocode('newyork', (data1) =>{
    console.log(data1)
})
//console.log(data)