const fields = require('./fields.js');

// https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#dynamicfieldsschema

const getFields = (z, bundle) => {
  if (bundle.inputData.show_all_data_fields === 'false') {
    return;
  }
  // ask the detrack api what fields this user has enabled
  const response = z.request('https://app.detrack.com/api/v2/profile');
  z.console.log('getting fields');
  return response
      .then((res) => res.json)
      .then((json) => json['data']['enabled_job_fields'])
      .then((userFields) => {
        return fields.filter((f) => {
          inUserFields = userFields.hasOwnProperty(f['key']);
          isEnabled = userFields[f['key']] === true;
          return inUserFields && isEnabled;
        });
      }).then((filtered) => {
        return filtered;
      });
};

module.exports = getFields;
