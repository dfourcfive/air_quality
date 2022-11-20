var CronJob = require('cron').CronJob;
const PollutionModel = require('../api/models/pollution');
const getPollutionDataFromIQAIR = require('../api/service/nearest_city');

const paris_zone_latitude = 48.856613;
const paris_zone_longitude = 2.352222;

const air_quality_checker_job = new CronJob(
    '* */10 * * * *',
    function () {
        fetchPollutionAndSave();
    });



async function fetchPollutionAndSave() {
    try {
        const result = await getPollutionDataFromIQAIR(paris_zone_latitude, paris_zone_longitude);


        if (result['status'] === 'success') {
            console.log('fetched +1');
            const resultInstance = new PollutionModel({
                ts: result['data']['current']['pollution']['ts'],
                mainus: result['data']['current']['pollution']['mainus'],
                aqius: result['data']['current']['pollution']['aqius'],
                aqicn: result['data']['current']['pollution']['aqicn'],
                maincn: result['data']['current']['pollution']['maincn'],
            });
            resultInstance.save((err) => {
                if (err) {
                    console.log(err);
                }
                // saved!
            });
        }
    } catch (error) {
        console.log(error);
    }
}
/**
 * Exports My Cron job
 * @public
 */
module.exports = air_quality_checker_job;