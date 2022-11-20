var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
const { env, port } = require('../../config/env-manager');

const getPollutionDataFromIQAIR= require('../../api/service/nearest_city');

test('Test getPollutionDataFromIQAIR', async function(){
   const lat = 48.856613;
   const lon = 2.352222;

   return getPollutionDataFromIQAIR(lat,lon).then((data) => {
      expect(data['status']).equal('success');
    });
});