import { JegPage } from './app.po';

describe('jeg App', function() {
  let page: JegPage;

  beforeEach(() => {
    page = new JegPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
