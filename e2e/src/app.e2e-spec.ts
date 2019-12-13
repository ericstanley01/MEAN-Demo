import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Messaging App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('verify title text', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('MEAN Stack Demo')
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
