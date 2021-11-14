import "cypress";
import { registerDataversePlugin } from "../../dist";
import { setBaseUrlFromEnv } from "./setBaseUrlFromEnv";

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  setBaseUrlFromEnv(config);
  registerDataversePlugin(on, config);
};
