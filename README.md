# Detrack Integration with Zapier Platform

This readme contains development documentation. You should read the [Zapier documentation](https://platform.zapier.com/cli_docs/docs) as well.

## Setting up

Install the Zapier Platform CLI:

`npm install -g zapier-platform-cli`

Clone the repository, then install dependencies:

`npm ci`

## Relevant files

The entry point is in `index.js`. This file contains a master list of all triggers and actions zapier can use.

`authentication.js` contains the logic for prompting the user for the API key, as well as sending a test request to a protected route in the Detrack API to test if the API Key is valid. In this case, we try to fetch the user's profile.

As per the Zapier documentaiton, triggers and actions can be grouped into resources. Instead of creating individual triggers and actions, we create a resource called `Job` and put the relevant triggers and actions inside. Currently, there is only one working action for create job.

`resources/job/index.js` represents a [resource schema](https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#resourceschema). It represents what actions are available.

`resources/jobs/actions/create.js` contains the core logic for the creation of jobs. It sends a POST request to the Detrack API endpoint and throws errors with necessary.

`resources/jobs/fields.js` is a hardcoded set of fields for a Job.

`resources/jobs/get_user_fields` is a [dynamic field](https://platform.zapier.com/cli_docs/docs#customdynamic-fields) that fetches the user's settings from the Detrack Dashboard merges it with the hardcoded `fields.js`. The idea is that **if the user disabled the field in the Detrack Dashboard, it should be disabled here as well**.

`resources/jobs/sample.js` is just a JSON representation of a sample Job that will be shown to Zapier users when they build their Zap.