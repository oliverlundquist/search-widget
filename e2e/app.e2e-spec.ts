import { SearchWidgetPage } from './app.po';

describe('search-widget App', function() {
  let page: SearchWidgetPage;

  beforeEach(() => {
    page = new SearchWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
