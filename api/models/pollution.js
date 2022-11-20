const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Pollution Schema
 * @private
 */
const PollutionSchema = new Schema({
    ts: {
      type: String,
      required: true,
      trim: true,
    },
    aqius: {
      type: Number,
      required: true,
    },
    mainus: {
      type: String,
      required: true,
    },
    aqicn: {
      type: String,
      required: true,
    },
    maincn: {
      type: String,
      required: true,
    },
    time:{
        type:Date,
        default: Date.now()
    }
  }, { timestamps: true });
  
const PollutionModel = mongoose.model('pollutions', PollutionSchema);

/**
 * @typedef Pollution
 */
  module.exports = PollutionModel;
