const authentication = {
  type: 'custom',
  test: {
    url: 'https://app.detrack.com/api/v2/profile',
    method: 'GET',
    body: {},
    removeMissingValuesFrom: {},
  },
  fields: [
    {
      computed: false,
      key: 'api_key',
      required: true,
      label: 'API Key',
      helpText: 'Found in the Detrack Dashboard > Settings > API Key',
      type: 'string',
    },
  ],
  connectionLabel: 'Profile',
  customConfig: {},
};

const addApiKeyToHeader = (request, z, bundle) => {
  request.headers['X-API-KEY'] = bundle.authData.api_key;
  request.headers['Content-Type'] = 'application/json';
  request.headers['Accept'] = 'application/json';
  return request;
};

module.exports = {
  'authentication': authentication,
  'beforeRequest': addApiKeyToHeader,
};
