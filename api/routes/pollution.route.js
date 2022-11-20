const app = require('express').Router();
const controller = require('../controllers/pollution.controller');

/**
 * @openapi
 * /:longitude/:latitude:
 *   get:
 *     description: Get Pollution data by longtitude and latitude
 *     parameters:
 *      - name: longitude
 *        description: longitude of the tartget zone
 *        in: formData
 *        required: true
 *        type: string
 *      - name: latitude
 *        description: latitude of the tartget zone
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: returns pollution data
 *       400:
 *         description: returned when there's an un error
 *       401:
 *         description: returned when minute/monthly limit is reached
 *       402:
 *         description: returned when API key is expired
 *       403:
 *         description: returned when there is no nearest station within specified radius
 *       404:
 *         description: returned when call requests a feature that is not available in chosen subscription plan
 *       405:
 *         description: returned when more than 10 calls per second are made
 *       406:
 *         description: returned when service is unable to locate IP address of request
*/
app.route('/:longitude/:latitude')
    .get([controller.load_pollution_data]);



/**
 * @openapi
 * /paris_most_polluted_at:
 *   get:
 *     description: Get get a datetime where Paris paris is the most polluted at
 *     responses:
 *       200:
 *         description: returns a date of when paris is most polluted
 *       500:
 *         description: returned when there's an internal server error
 *         
 */
app.route('/paris_most_polluted_at')
    .get([controller.most_polluted]);




module.exports = app;