import * as fromBlog from './blog.actions-page';

describe('loadArticles', () => {
  it('should return an action', () => {
    expect(fromBlog.loadArticles().type).toBe('[Blog] Load');
  });
});
