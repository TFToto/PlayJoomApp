import { browser, element, by } from 'protractor';

export class PlayJoomAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pja-root h1')).getText();
  }
}
