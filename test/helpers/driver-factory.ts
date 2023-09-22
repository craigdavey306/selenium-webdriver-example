import { Builder, WebDriver } from 'selenium-webdriver';
import * as Chrome from 'selenium-webdriver/chrome';

export type Browser = 'chrome' | 'firefox';

function buildChrome(headless: boolean): WebDriver {
  const options = new Chrome.Options();

  if (headless) {
    options.addArguments('--headless=new');
  }

  options.addArguments('--ignore-certificate-errors');
  options.excludeSwitches('enable-logging');
  options.setPageLoadStrategy('normal');

  return new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

function buildFirefox(headless: boolean): WebDriver {
  return new Builder().forBrowser('firefox').build();
}

export default function driverFactory(
  browser: Browser,
  headless = true
): WebDriver {
  switch (browser) {
    case 'firefox':
      return buildFirefox(headless);
    default:
      return buildChrome(headless);
  }
}
