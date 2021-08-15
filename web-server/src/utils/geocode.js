const request = require('request')

const geocode = (city, callback) =>{
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(city) + '.json?access_token=pk.eyJ1IjoibGV0cnVuZ3ZpZXQiLCJhIjoiY2tzNjJlYWQ1MWhxeTJvcGtjbXBwMjNiNSJ9.0kh18veEw_tmD4UkpvG59w&limit=1'
    console.log(geoUrl)
    request({url:geoUrl, json:true}, (error, response) => {
        if(error)
        {
            console.log('errrrrrro')
        }
        else {
            console.log(response.body)
            const lattitue = response.body.features[0].center[0]
            const long = response.body.features[0].center[1]
            console.log(lattitue)
            console.log(long)
            callback(undefined, {
                lattitue: lattitue,
                longitue: long
            })
        }
    })
}

module.exports = geocode