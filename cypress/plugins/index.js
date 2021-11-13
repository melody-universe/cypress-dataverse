/// <reference types="cypress" />

const registerDataversePlugin = require("../..").default;

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  registerDataversePlugin(on, config);
};
