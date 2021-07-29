const request = require('request')


const forecast = (latitude,longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=abffa0e19e1db1baecf6d1bc2d4c27d7&query="+data.latitude+","+data.longitude
    request({ url, json: true }, (error, { body } = {}) => {
        if (error){
            callback("Weather Service currently not available!!",undefined)
        } else if(body.error){
            callback('Unable To Find Location',undefined)
        } else{
            const { temperature } = body.current
            callback(undefined,temperature)
        }
     })
}

module.exports = forecast