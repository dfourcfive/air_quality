![node version](https://img.shields.io/badge/node-%3E=%2012.0.0-brightgreen.svg)
[![express](https://img.shields.io/badge/express-4.18.2-orange.svg)](https://github.com/expressjs/express)
[![mongoose](https://img.shields.io/badge/mongoose-6.7.2-red.svg)](https://mongoosejs.com/)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)


# Node.js - Express, MongoDB, REST API,CronJob Boilerplate


## Features

- Uses [npm](https://npmjs.com)
- No transpilers, just vanilla javascript with ES2018 latest features like Async/Await
- Express + MongoDB ([Mongoose](http://mongoosejs.com/))
- CORS enabled and uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
- Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
- Logging with winston [winston](https://github.com/winstonjs/winston)
- Consistent coding styles with [editorconfig](http://editorconfig.org)
- Gzip compression with [compression](https://github.com/expressjs/compression)
- Periodic tasks and jobs [cron](https://www.npmjs.com/package/cron)
- Linting with [eslint](http://eslint.org)
- Tests with [mocha](https://mochajs.org), [chai](http://chaijs.com) and [sinon](http://sinonjs.org)
- Code coverage with [Jest](https://jestjs.io/)
- Logging with [morgan](https://github.com/expressjs/morgan)
- Rate limiting with [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- API documentation generation with [swagger-docs](https://swagger.io/docs/)



## Prerequisites

- [Node v18.10.0](https://nodejs.org/en/download/current/)

- [npm v8.19.2](https://www.npmjs.com)

## Getting Started

1. Clone the repo and make it yours:

```bash
git clone https://github.com/dfourcfive/air_quality.git
cd air_quality
```

2. Install dependencies:

```bash
npm install
```

3. Set environment variables:
- note : this script must be excuted first!
```bash
bash to_dev.sh
```

## Running Locally

```bash
node server.js
```

## Test

```bash
# run all tests with Jest
npm run test

# run unit tests
npm run test:unit

# run integration tests
npm run test:integration

# run all tests and watch for changes
npm run test:watch

# generate coverage reports
npm run coverage
```