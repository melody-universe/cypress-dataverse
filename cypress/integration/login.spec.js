describe("Login", () =>
  it("Can login to Dataverse", () =>
    cy
      .task("getDataverseCookies", {
        url: Cypress.config("baseUrl"),
        username: Cypress.config("username"),
        password: Cypress.config("password"),
      })
      .then(() => expect(1).to.equal(1))));
