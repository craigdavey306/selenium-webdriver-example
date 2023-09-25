import { By, WebDriver } from 'selenium-webdriver';
import Page from './Page';

export default class InventoryPage extends Page {
  private static backpackImageId = By.id('item_4_img_link');

  constructor(driver: WebDriver) {
    super(driver);
  }

  // ---------------- Getters -----------------
  public get backpackImage() {
    return this._driver.findElement(InventoryPage.backpackImageId);
  }

  // ---------------- Functions -----------------
  public async clickOnBackpackImage() {
    await this._driver
      .actions()
      .move({ origin: await this.backpackImage })
      .click()
      .pause(300)
      .perform();
  }
}
