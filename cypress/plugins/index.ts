import "cypress";
import { registerDataversePlugin } from "../../plugin";
import { setBaseUrlFromEnv } from "./setBaseUrlFromEnv";

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  registerDataversePlugin(on, config);
  return setBaseUrlFromEnv(config);
};
