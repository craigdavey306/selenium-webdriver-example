import { describe } from 'mocha';
import { expect } from 'chai';

import LoginPage from '../models/pages/LoginPage';
import driverFactory from '../helpers/driver-factory';
import InventoryPage from '../models/pages/InventoryPage';

describe('Autentication Workflow', async function () {
  context('Given a valid username and password', async function () {
    const url = 'https://www.saucedemo.com/';
    const driver = driverFactory('chrome');
    const page = new LoginPage(driver);

    before(() => page.navigateToUrl(url));

    after(() => page.closeSession());

    it('Should log the user in', async function () {
      const expectedUrl = 'https://www.saucedemo.com/inventory.html';

      await page.login('standard_user', 'secret_sauce');
      const currentUrl = await page.getCurrentUrl();

      expect(currentUrl).to.equal(expectedUrl);
    });

    it('Should select the backpack from the inventory list', async function () {
      const expectedUrl = 'https://www.saucedemo.com/inventory-item.html?id=4';

      const inventoryPage = new InventoryPage(driver);
      await inventoryPage.clickOnBackpackImage();

      const currentUrl = await page.getCurrentUrl();

      expect(currentUrl).to.equal(expectedUrl);
    });
  });
});
