/* globals describe it */
const should = require('should');

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('My App', () => {
  it('should run resources.job', (done) => {
    const bundle = {
      authData: {
        'api_key': process.env.X_API_KEY,
      },
      inputData: {
        'date': '2019-01-01',
        'do_number': 'kek',
        'address': '15 Simei Street 4',
      },
    };

    appTester(App.resources.job.create.operation.inputFields, bundle)
        .then((results) => {
          done();
        })
        .catch(done);
  });
});
