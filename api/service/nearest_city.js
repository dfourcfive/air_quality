const url = require('url');
const got = require('got');
require('dotenv').config();



    /**
     * an async Function to fetch (@GET REQUEST) data
     * from the iqair API 
     * this will fetch nearest city data by a given latitude and longtitude
     * 
     * 
    */
async function getPollutionDataFromIQAIR(lat,lon){
    const urlObject={
        protocol: 'http',
        hostname: 'api.airvisual.com',
        pathname: '/v2/nearest_city',
        query: {
            lat: lat,
            lon: lon,
            key: process.env.IQAIR_API_KEY
        } 
    }
    /**
     * Foramating the endpoint url
    */
    const request_url = url.format(urlObject)
    let result = await got(request_url, { json: true });
    //console.log(result.body['result']);
    return result.body;
}


module.exports = getPollutionDataFromIQAIR;

