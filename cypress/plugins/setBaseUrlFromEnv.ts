export function setBaseUrlFromEnv(config: Cypress.PluginConfigOptions) {
  config.baseUrl = config.env.BASE_URL;
  return config;
}
