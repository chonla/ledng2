import { LedPage } from './app.po';

describe('led App', () => {
  let page: LedPage;

  beforeEach(() => {
    page = new LedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
