declare namespace Cypress {
  interface Chainable<Subject> {
    login(
      credentials: import("./types/Credentials").Credentials
    ): Chainable<Cypress.AUTWindow>;
  }
}
