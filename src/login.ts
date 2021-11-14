import { Protocol } from "puppeteer";
import { Credentials } from "./types/Credentials";

export function login(authOptions: Credentials) {
  return cy
    .task<Protocol.Network.Cookie[]>("getDataverseCookies", authOptions)
    .then((cookies) => {
      cy.clearCookies();
      cookies.forEach((cookie) => {
        const {
          name,
          value,
          domain,
          expires: expiry,
          httpOnly,
          path,
          secure,
        } = cookie;
        cy.setCookie(name, value, {
          domain,
          expiry,
          httpOnly,
          path,
          secure,
        });
        Cypress.Cookies.preserveOnce(name);
      });
      return cy.visit("/");
    });
}
