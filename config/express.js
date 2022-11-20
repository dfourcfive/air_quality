const { logs } = require('./env-manager');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');




/**
 * Instantiate Express Framwork
 * @public
 */
 const app = express();

// use the logging manager , logs will be in the file
app.use(morgan(logs));

// Mount BodyParser middleware will append body of request to req.body
app.use(bodyParser.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10kb' }));



// secure your Express apps by setting various HTTP headers
app.use(helmet());

// Enable CORS - Cross Origin Resource Sharing
app.use(cors());

// Get Code Coverage report
app.use('/coverage', express.static('coverage'));


// Mounting api routing
app.use('/api/v1', require('../api/routes/index.route'));


/**
 * a constant for swagger options
 */
const swaggerOptions = {
  openapi: '3.0.0',
    swaggerDefinition: {
      info: {
        title: "Air quality API",
        version: '1.0.0',
      },
      host: "localhost:8080", // the host or url of the app
      basePath: "/api/v1", // the basepath of your endpoint
    },
    servers: [
      {
        url: 'http://localhost:3030',
        description: 'Development server',
      },
    ],
    explorer: true,
    apis: ['./api/**/*.js'],
  };
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
/**
 * GET v1/coverage
 */
module.exports = app;