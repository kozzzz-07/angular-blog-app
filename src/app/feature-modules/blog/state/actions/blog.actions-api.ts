import { createAction, props } from '@ngrx/store';
import { Article } from '../../models/blog.model';

export const loadArticles = createAction('[Blog Page] Load Articles');

export const loadSuccess = createAction(
  '[Blog API] Load Success',
  props<{ articles: Article[] }>()
);

export const loadFailure = createAction(
  '[Blog API] Load Failure',
  props<{ error: string }>()
);

export const postArticleSuccess = createAction(
  '[Blog API] Post Article Success',
  props<{ article: Article }>()
);

export const postArticleFailure = createAction(
  '[Blog API] Post Article Failure',
  props<{ error: string }>()
);

export const updateArticleSuccess = createAction(
  '[Blog API] Update Article Success',
  props<{ article: Article }>()
);

export const updateArticleFailure = createAction(
  '[Blog API] Update Article Failure',
  props<{ error: string }>()
);
