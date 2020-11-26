import * as fromBlog from './blog.actions';

describe('loadArticles', () => {
  it('should return an action', () => {
    expect(fromBlog.loadArticles().type).toBe('[Blog] Load');
  });
});
