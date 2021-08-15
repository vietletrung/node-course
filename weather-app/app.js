const request = require('request')
const cities = ['new your', 'Los Algeles', 'Texas']
const getgeocode = (city, callback) =>{
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(city) + '.json?access_token=pk.eyJ1IjoibGV0cnVuZ3ZpZXQiLCJhIjoiY2tzNjJlYWQ1MWhxeTJvcGtjbXBwMjNiNSJ9.0kh18veEw_tmD4UkpvG59w&limit=1'

    request({url:geoUrl, json:true}, (error, response) => {
        if(error)
        {
            console.log('errrrrrro')
        }
        else {
            const lattitue = response.body.features[0].center[0]
            const long = response.body.features[0].center[1]
            //console.log(lattitue)
            //console.log(long)
            callback({
                lat: lattitue,
                long: long
            })
        }
    })
}

const getforecast = (lat, long, callback) =>{
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(city) + '.json?access_token=pk.eyJ1IjoibGV0cnVuZ3ZpZXQiLCJhIjoiY2tzNjJlYWQ1MWhxeTJvcGtjbXBwMjNiNSJ9.0kh18veEw_tmD4UkpvG59w&limit=1'

    request({url:geoUrl, json:true}, (error, response) => {
        if(error)
        {
            console.log('errrrrrro')
        }
        else {
            const lattitue = response.body.features[0].center[0]
            const long = response.body.features[0].center[1]
            //console.log(lattitue)
            //console.log(long)
            callback({
                lat: lattitue,
                long: long
            })
        }
    })
}

cities.forEach(element => {
    getgeocode(element, (data) => {
        console.log(data)
        console.log(data.lat)
        console.log(data.long)
        
    })
})
//getgeocode('Newyork', (lat, long) =>{
//    console.log(lat)
//    console.log(long)
//})