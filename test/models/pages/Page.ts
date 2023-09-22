import { WebDriver } from 'selenium-webdriver';

export default class Page {
  constructor(protected _driver: WebDriver) {}

  // ---------------- Functions -----------------

  /**
   * Schedules a command to open a browser tabe and navigate to the URL.
   *
   * @param url
   */
  async navigateToUrl(url: string): Promise<void> {
    await this._driver.get(url);
    await this._driver.manage().window().fullscreen();
  }

  /**
   * Schedules a command to close the current session.
   */
  async closeSession(): Promise<void> {
    await this._driver.close();
  }

  /**
   * Schedules a command to fetch the current url.
   *
   * @returns A promise that is resolved when the command completes.
   */
  async getCurrentUrl(): Promise<string> {
    return this._driver.getCurrentUrl();
  }
}
