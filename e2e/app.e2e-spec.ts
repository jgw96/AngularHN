import { SplitHNPage } from './app.po';

describe('split-hn App', function() {
  let page: SplitHNPage;

  beforeEach(() => {
    page = new SplitHNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
