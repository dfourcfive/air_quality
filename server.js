const app = require('./config/express');
const { env, port } = require('./config/env-manager');
const { DBConnect } = require('./config/db_connection');
const logger = require('./config/logger');
const air_quality_checker_job=require('./services/pollution_cron_job_service');

const MyApp = app;




MyApp.listen(port,()=>{
    DBConnect();
    air_quality_checker_job.start();
    logger.info(`${env} Server is Listening on PORT ${port}`);
});
MyApp.on('error',(error)=>{
    logger.info(`${env} : => ${error}`);
});
  



/**
 * Exports Express
 * @public
 */
 module.exports = MyApp;
