import { describe } from 'mocha';
import { expect } from 'chai';

import LoginPage from '../models/pages/LoginPage';
import driverFactory from '../helpers/driver-factory';

describe('Autentication Workflow', async function () {
  context('Given a valid username and password', async function () {
    const url = 'https://www.saucedemo.com/';
    const page = new LoginPage(driverFactory('chrome'));

    before(() => page.navigateToUrl(url));

    after(() => page.closeSession());

    it('Should log the user in', async function () {
      const expectedUrl = 'https://www.saucedemo.com/inventory.html';

      await page.login('standard_user', 'secret_sauce');
      const currentUrl = await page.getCurrentUrl();

      expect(currentUrl).to.equal(expectedUrl);
    });
  });
});
