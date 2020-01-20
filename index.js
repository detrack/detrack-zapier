const authentication = require('./authentication');
const podTrigger = require('./triggers/pod');

const JobResource = require('./resources/job');

const App = {
  platformVersion: require('zapier-platform-core').version,
  version: require('./package.json').version,
  authentication: authentication.authentication,
  beforeRequest: [authentication.beforeRequest],
  triggers: {
    // [podTrigger.key]: podTrigger,
  },
  resources: {
    [JobResource.key]: JobResource,
  },
};

module.exports = App;
