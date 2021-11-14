import { getDataverseCookies } from "./getDataverseCookies";
import { login } from "./login";
import "./types/commands";
import { Credentials } from "./types/Credentials";

export function registerDataversePlugin(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) {
  on("task", {
    async getDataverseCookies(credentials: Credentials) {
      if (config.baseUrl) {
        return await getDataverseCookies(config.baseUrl, credentials);
      }
      throw new Error("Cannot login to Dataverse. Missing config.baseUrl");
    },
  });
}

export function registerDataverseCommands() {
  Cypress.Commands.add("login", login);
}
