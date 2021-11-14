import { login } from "./login";

export function registerDataverseCommands() {
  Cypress.Commands.add("login", login);
}
