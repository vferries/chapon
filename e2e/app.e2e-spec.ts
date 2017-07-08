import { ChaponPage } from './app.po';

describe('chapon App', () => {
  let page: ChaponPage;

  beforeEach(() => {
    page = new ChaponPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
