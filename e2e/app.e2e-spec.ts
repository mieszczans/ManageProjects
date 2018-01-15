import { NgStylesAnimationPage } from './app.po';

describe('ng-styles-animation App', () => {
  let page: NgStylesAnimationPage;

  beforeEach(() => {
    page = new NgStylesAnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
