import { blogReducer, initialState } from './blog.reducer';

describe('Blog Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = blogReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
