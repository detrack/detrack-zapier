const sample = require('./sample.js');

const perform = (z, bundle) => {
  z.console.log(bundle.cleanedRequest.content);
  return [bundle.cleanedRequest.content.json];
};

const performList = (z, bundle) => {
  const options = {
    url: 'https://app.detrack.com/api/v2/jobs',
    method: 'GET',
    params: {
      'limit': 5,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    // You can do any parsing you need for results here before returning them

    return results.data;
  });
};

const performSubscribe = (z, bundle) => {
  const options = {
    url: 'https://app.detrack.com/api/v2/webhook_settings',
    method: 'PUT',
    body: {
      data: {
        webhook_url: bundle.targetUrl,
        webhook_user_agent: null,
        webhook_username: null,
        webhook_password: null,
        webhook_auth_url: null,
        webhook_triggers: ['completed', 'completed_partial', 'failed'],
        webhook_api_type: null,
        webhook_content_type: 'json',
        webhook_version: '2',
      },
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

const performUnsubscribe = (z, bundle) => {
  const options = {
    url: 'https://app.detrack.com/api/v2/webhook_settings',
    method: 'PUT',
    body: {
      data: {
        webhook_url: '',
        webhook_user_agent: null,
        webhook_username: null,
        webhook_password: null,
        webhook_auth_url: null,
        webhook_triggers: ['completed', 'completed_partial', 'failed'],
        webhook_api_type: null,
        webhook_content_type: 'json',
        webhook_version: '2',
      },
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    type: 'hook',
    performList: performList,
    performSubscribe: performSubscribe,
    performUnsubscribe: performUnsubscribe,
    sample: {
      json: sample,
    },
  },
  key: 'pod_webhook_v2',
  noun: 'Job',
  display: {
    label: 'POD Submission Notification (V2 API)',
    description: 'Triggered when a driver submits a POD for a Job through the drivers app. Please set Webhook Version to V2 in settings.',
    hidden: false,
    important: true,
  },
};
