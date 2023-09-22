import { By, WebDriver, until } from 'selenium-webdriver';
import Page from './Page';

export default class LoginPage extends Page {
  private static usernameInputId = By.id('user-name');
  private static passwordInputId = By.id('password');
  private static loginButtonId = By.id('login-button');

  constructor(driver: WebDriver) {
    super(driver);
  }

  // ---------------- Getters -----------------
  public get usernameInput() {
    return this._driver.findElement(LoginPage.usernameInputId);
  }

  public get passwordInput() {
    return this._driver.findElement(LoginPage.passwordInputId);
  }

  public get loginButton() {
    return this._driver.findElement(LoginPage.loginButtonId);
  }

  // ---------------- Functions -----------------

  public async enterUsername(
    username: string,
    pauseDuration = 300
  ): Promise<void> {
    await this._driver
      .actions()
      .move({ origin: await this.usernameInput })
      .pause(pauseDuration)
      .click()
      .sendKeys(username)
      .perform();
  }

  public async enterPassword(
    password: string,
    pauseDuration = 300
  ): Promise<void> {
    await this._driver
      .actions()
      .move({ origin: await this.passwordInput })
      .pause(pauseDuration)
      .click()
      .sendKeys(password)
      .perform();
  }

  public async pressLoginButton() {
    await this._driver
      .actions()
      .move({ origin: await this.loginButton })
      .click()
      .pause(300)
      .perform();
  }

  public async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.pressLoginButton();
  }
}
