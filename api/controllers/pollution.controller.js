const getPollutionDataFromIQAIR = require('../service/nearest_city');
const PollutionModel = require('../models/pollution');



/**
 * Load user and append to req.
 * @public
 */
exports.load_pollution_data = async (req, res, next) => {
  try {
    const longitude = req.params.longitude;
    const latitude = req.params.latitude;
    const result = await getPollutionDataFromIQAIR(latitude, longitude);


    switch (result['status']) {
      case 'success':
        let polution = result['data']['current']['pollution'];
        res.status(200).json({
          Result: {
            Polution: polution
          }
        });
        break;
      case 'call_limit_reached':
        res.status(401).json({
          error: result['status']
        });
        break;
      case 'api_key_expired':
        res.status(402).json({
          error: result['status']
        });
        break;
      case 'incorrect_api_key':
        res.status(403).json({
          error: result['status']
        });
        break;
      case 'no_nearest_station':
        res.status(404).json({
          error: result['status']
        });
        break;
      case 'feature_not_available':
        res.status(405).json({
          error: result['status']
        });
        break;
      case 'too_many_requests':
        res.status(406).json({
          error: result['status']
        });
        break;
      case 'ip_location_failed':
        res.status(407).json({
          error: result['status']
        });
        break;
      default:
        res.status(400).json({
          error: result['status']
        });
        break;
    }
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
};



/**
* My method description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
*/
exports.most_polluted = async (req, res, next) => {
  try {
    const sortedObjects = await PollutionModel.find().sort({
      'aqius': -1
    });
    if (sortedObjects.length == 0) {
      res.status(200).send({
        status: 'success',
        message: 'no data avaialable for the moment'
      })
    }
    const result = sortedObjects[1];
    res.status(200).send({
      status: 'success',
      message: '',
      result: result.time
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error
    });
  }
};