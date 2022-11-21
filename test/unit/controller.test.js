const sinon = require('sinon');
var chai = require('chai');
const chaiHttp = require('chai-http');
const { env, port } = require('../../config/env-manager');

var expect = chai.expect;
var assert = chai.assert;
const MyApp= require('../../server');



describe('test my api', () => {
    describe("Test the get request", () => {
        it('', async () => {
            chai.use(chaiHttp);
            const res = await chai.request("localhost:"+port).get("/api/v1/pollution/paris_most_polluted_at");
            expect(res.status).to.eq(200);
            assert.notEqual(res.body['result'], null);
            assert.notEqual(res.body['result'], '');
            assert.notEqual(res.body['message'], null);
            assert.notEqual(res.body['status'], null);
        });
    });
  });