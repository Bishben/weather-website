const request = require('request')

const geocode = (address,callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURI(address)+".json?access_token=pk.eyJ1IjoiYmlzaGJlbiIsImEiOiJja3JnZ3E0eGYwaGYxMnhrd2sxM2xvMjMwIn0._jSwrXYTVqwWZaNsh4LRrQ&limit=1"
    request({ url, json: true}, (error,{ body } = {}) => {
        if(error){
            callback('Unable To Establish Connection Geocode Services',undefined)
        } else if(body.message){
            callback(body.message,undefined)
        } else if(body.features.length === 0){
            callback("Place Not Found",undefined)
        } else{
            const { geometry } = body.features[0]
            const latitude = geometry.coordinates[1]
            const longitude = geometry.coordinates[0]
            const location = body.features[0].place_name
            data = {
                latitude: latitude,
                longitude: longitude,
                location: location
            }
            callback(undefined,data)
        }
        
    })
}

module.exports = geocode