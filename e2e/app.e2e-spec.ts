import { SamplewithbootstrapPage } from './app.po';

describe('samplewithbootstrap App', function() {
  let page: SamplewithbootstrapPage;

  beforeEach(() => {
    page = new SamplewithbootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
