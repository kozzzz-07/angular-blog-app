import { createAction, props } from '@ngrx/store';

export const loadBlogs = createAction(
  '[Blog] Load Blogs'
);

export const loadBlogsSuccess = createAction(
  '[Blog] Load Blogs Success',
  props<{ data: any }>()
);

export const loadBlogsFailure = createAction(
  '[Blog] Load Blogs Failure',
  props<{ error: any }>()
);
