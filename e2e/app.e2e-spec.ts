import { PlayJoomAppPage } from './app.po';

describe('play-joom-app App', () => {
  let page: PlayJoomAppPage;

  beforeEach(() => {
    page = new PlayJoomAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pja works!');
  });
});
