// Exports the Resource object as required by the Zapier API
const sample = require('./sample.js');
const createAction = require('./actions/create.js');

// https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#resourceschema
module.exports = {
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#keyschema
  'key': 'job',
  'noun': 'Job',
  'create': createAction,
  'sample': sample,
};
