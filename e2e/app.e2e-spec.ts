import { FreePlacesPage } from './app.po';

describe('free-places App', function() {
  let page: FreePlacesPage;

  beforeEach(() => {
    page = new FreePlacesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
