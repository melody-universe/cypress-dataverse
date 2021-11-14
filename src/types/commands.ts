declare namespace Cypress {
  interface Chainable<Subject> {
    login(
      credentials: import("./Credentials").Credentials
    ): Chainable<Cypress.AUTWindow>;
  }
}
