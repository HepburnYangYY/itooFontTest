import { ItootestPage } from './app.po';

describe('itootest App', () => {
  let page: ItootestPage;

  beforeEach(() => {
    page = new ItootestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
