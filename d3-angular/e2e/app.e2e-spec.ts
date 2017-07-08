import { D3AngularPage } from './app.po';

describe('d3-angular App', () => {
  let page: D3AngularPage;

  beforeEach(() => {
    page = new D3AngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
