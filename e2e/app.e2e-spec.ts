import { AppPage } from './app.po';

describe('ngrx-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display current count', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Current Count: 0');
  });
});
