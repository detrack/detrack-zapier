const getConnectionLabel = (z, bundle) => {
  const options = {
    url: 'https://app.detrack.com/api/v2/profile',
    method: 'GET',
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    // You can do any parsing you need for results here before returning them

    return results.data.name + ' @ ' + results.data.current_organization.name;
  });
};

const authentication = {
  type: 'custom',
  test: {
    url: 'https://app.detrack.com/api/v2/profile',
    method: 'GET',
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
  connectionLabel: getConnectionLabel,
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
