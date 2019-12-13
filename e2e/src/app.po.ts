import { browser, by, element } from 'protractor';
import { resolve } from 'dns';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return browser.getTitle()
  }

}
