import { GitdashPage } from './app.po';

describe('gitdash App', function() {
  let page: GitdashPage;

  beforeEach(() => {
    page = new GitdashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
