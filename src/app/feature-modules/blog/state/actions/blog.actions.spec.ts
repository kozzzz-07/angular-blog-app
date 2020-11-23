import * as fromBlog from './blog.actions';

describe('loadBlogs', () => {
  it('should return an action', () => {
    expect(fromBlog.loadBlogs().type).toBe('[Blog] Load Blogs');
  });
});
