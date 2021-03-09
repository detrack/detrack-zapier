// Defines the create action for type Job

const getFields = require("../get_user_fields.js");

const throwForContent = (z, response) => {
  const results = z.JSON.parse(response.content);
  if (response.status > 300) {
    // if (!("message" in results)) {
    //   response.throwForStatus();
    // }
    let errorMessage = "";
    errorMessage += results.message + ": ";
    for (let i = 0; i < results.errors.length; i++) {
      errorMessage += "Field " + results.errors[i].field + " ";
      errorMessage += results.errors[i].codes.join(" and ");
    }
    throw new z.errors.HaltedError(errorMessage);
  }
  return results;
};

const createFunction = (z, bundle) => {
  const options = {
    url: "https://app.detrack.com/api/v2/jobs",
    method: "POST",
    body: {
      data: bundle.inputData,
    },
  };

  return z.request(options).then((response) => {
    const results = throwForContent(z, response);
    // You can do any parsing you need for results here before returning them

    return results.data;
  });
};

// https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#resourcemethodcreateschema
module.exports = {
  display: {
    label: "Create Job",
    description: "Creates a Job in the Detrack Dashboard",
    important: true,
  },
  operation: {
    perform: createFunction,
    inputFields: [
      {
        key: "type",
        required: true,
        helpText: "Is this a Delivery or a Collection?",
        choices: ["Delivery", "Collection"],
      },
      {
        key: "do_number",
        required: true,
        helpText: "DO Number.",
      },
      {
        key: "date",
        required: true,
        helpText:
          "Date. It is listed here as a datetime field, but only the date will be considered.",
        type: "datetime",
      },
      {
        key: "address",
        required: true,
        helpText: "Address of this job.",
      },
      {
        key: "show_all_data_fields",
        required: true,
        default: "false",
        type: "boolean",
        altersDynamicFields: true,
      },
      getFields,
      {
        key: "items",
        required: false,
        children: [
          {
            key: "sku",
            helpText: "Stock Keeping Unit",
            type: "string",
          },
          {
            key: "quantity",
            helpText: "Quantity",
            type: "integer",
            required: true,
          },
          {
            key: "description",
            helpText: "Description",
            type: "string",
            required: true,
          },
          {
            key: "comments",
            helpText: "Comments",
            type: "string"
          },
          {
            key: "serial_numbers",
            helpText: "Serial Numbers",
            list: true,
          },
        ],
      },
    ],
  },
};
