# cypress-dataverse

A library of custom [Cypress commands](https://docs.cypress.io/api/cypress-api/custom-commands) for building tests for Microsoft Dataverse.

## Installation

Add `cypress-dataverse` to your project by running the following:

```
npm install --save-dev cypress-dataverse
```

## Setup

### Plugin

Add the following to `cypress/plugins/index.js`:

```js
const { registerDataversePlugin } = require("cypress-dataverse/plugin");

module.exports = (on, config) => {
  registerDataversePlugin(on, config);
};
```

### Commands

Add the following to `cypress/support/index.js`:

```js
const { registerDataverseCommands } = require("cypress-dataverse/commands");

registerDataverseCommands();
```

## Usage

Add the following `beforeEach` call to any of your `.spec.js` files to login to Dataverse:

```js
beforeEach(() => {
  cy.login({
    username: Cypress.config("username"),
    password: Cypress.config("password"),
  });
});
```

**Note:** This assumes that you are storing `username` and `password` for a test account in your Cypress. You might instead want to add these credentials as [environment variables](https://docs.cypress.io/guides/guides/environment-variables).
