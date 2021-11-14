import * as puppeteer from "puppeteer";
import { Credentials } from "./types/Credentials";

export async function getDataverseCookies(
  url: string,
  { username, password }: Credentials
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await typeUsername();
  await typePassword();
  await click("Yes");
  await waitForHomepage();

  const returnValue = page.cookies();
  await browser.close();
  return returnValue;

  async function typeUsername() {
    await type("loginfmt", username);
    await click("Next");
  }

  async function typePassword() {
    await type("passwd", password);
    await click("Sign in");
  }

  async function type(inputName: string, value: string) {
    await (await page.waitForSelector(`input[name="${inputName}"]`))!.type(
      value
    );
  }

  async function click(buttonText: string) {
    await (await page.waitForSelector(`input[value="${buttonText}"]`))!.click();
  }

  async function waitForHomepage() {
    await page.waitForFunction(
      (url: string) =>
        window.location.href.startsWith(url) &&
        document.readyState === "complete",
      undefined,
      url
    );
  }
}
