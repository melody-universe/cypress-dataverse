/// <reference types="../.." />

describe("Login", () =>
  it("Can login to Dataverse", () => {
    cy.login({
      username: Cypress.env("USERNAME"),
      password: Cypress.env("PASSWORD"),
    });
  }));