const perform = (z, bundle) => {
  return [bundle.cleanedRequest];
};

const performSubscribe = (z, bundle) => {
  const options = {
    url: 'https://app.detrack.com/api/v2/webhook_settings',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-API-KEY': bundle.authData.api_key,
    },
    params: {
      api_key: bundle.authData.api_key,
    },
    body: {
      data: {
        webhook_url: bundle.targetUrl,
        webhook_user_agent: null,
        webhook_username: null,
        webhook_password: null,
        webhook_auth_url: null,
        webhook_triggers: ['completed', 'completed_partial', 'failed'],
        webhook_api_type: null,
        webhook_content_type: 'x-www-form-urlencoded',
        webhook_version: '1',
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
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-API-KEY': bundle.authData.api_key,
    },
    params: {
      api_key: bundle.authData.api_key,
    },
    body: {
      data: {
        webhook_url: null,
        webhook_user_agent: null,
        webhook_username: null,
        webhook_password: null,
        webhook_auth_url: null,
        webhook_triggers: ['completed', 'completed_partial', 'failed'],
        webhook_api_type: null,
        webhook_content_type: 'x-www-form-urlencoded',
        webhook_version: '1',
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
    performSubscribe: performSubscribe,
    performUnsubscribe: performUnsubscribe,
    sample: {
      json: {
        date: '2014-02-13',
        address: '63 Ubi Avenue 1 Singapore 408937',
        delivery_time: '09:00 AM - 12:00 PM',
        deliver_to: 'John Tan',
        phone: '+6591234567',
        notify_email: 'john.tan@example.com',
        notify_url: 'http://www.example.com/notify.php',
        assign_to: 'GT1234H',
        instructions: 'Call customer upon arrival.',
        zone: 'East',
        reason: '',
        note: 'Recipient commented that delivery is very prompt.',
        received_by: 'John',
        image: 1,
        view_image_url:
          'https://app.detrack.com/deliveries/photo/52cbaf87f92ea105a4000115.jpg',
        do: 'DO140213001',
        status: 'Delivered',
        time: '2014-02-13T09:30:45+08:00',
        pod_lat: 1.32502083807714,
        pod_lng: 103.89377927122,
        pod_address: '63 Ubi Avenue 1, Singapore 408937',
        items: [
          {
            sku: 'T0201',
            desc: 'Test Item #01',
            qty: 1,
            reject: 0,
            reason: '',
          },
          {
            sku: 'T0202',
            desc: 'Test Item #02',
            qty: 5,
            reject: 0,
            reason: '',
          },
          {
            sku: 'T0203',
            desc: 'Test Item #03',
            qty: 10,
            reject: 0,
            reason: '',
          },
        ],
      },
    },
    outputFields: [
      {key: 'json__date', label: 'Date'},
      {key: 'json__address', label: 'Address'},
      {key: 'json__delivery_time', label: 'Delivery Time'},
      {key: 'json__deliver_to', label: 'Deliver To'},
      {key: 'json__phone', label: 'Phone'},
      {key: 'json__notify_email', label: 'Notify Email'},
      {key: 'json__notify_url', label: 'Notify URL'},
      {key: 'json__assign_to', label: 'Assign To'},
      {key: 'json__instructions', label: 'Instructions'},
      {key: 'json__zone', label: 'Zone'},
      {key: 'json__reason', label: 'Reason'},
      {key: 'json__note', label: 'Note'},
      {key: 'json__received_by', label: 'Received By'},
      {key: 'json__image', label: 'Contains Image?'},
      {key: 'json__view_image_url', label: 'View Image URL'},
      {key: 'json__do', label: 'DO Number'},
      {key: 'json__status', label: 'Status'},
      {key: 'json__time', label: 'Time', type: 'datetime'},
      {key: 'json__pod_lat', type: 'number', label: 'POD Latitude'},
      {key: 'json__pod_lng', type: 'number', label: 'POD Longitude'},
      {key: 'json__pod_address', label: 'POD Address'},
      {key: 'json__items[]sku', label: 'Item SKU'},
      {key: 'json__items[]desc', label: 'Item Description'},
      {key: 'json__items[]qty', label: 'Item Quantity', type: 'integer'},
      {key: 'json__items[]reject', label: 'Item Rejected?'},
      {key: 'json__items[]reason', label: 'Item Rejected Reason'},
    ],
  },
  key: 'delivery_webhook',
  noun: 'Delivery',
  display: {
    label: 'Delivery Complete (V1 API)',
    description: 'Triggers when a delivery is marked as delivered.',
    directions: 'You must be using V1 webhook',
    hidden: false,
    important: true,
  },
};
