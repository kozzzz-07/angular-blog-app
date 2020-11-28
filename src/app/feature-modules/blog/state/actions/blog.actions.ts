import { createAction, props } from '@ngrx/store';
import { Article } from '../../models/blog.model';

export const loadArticles = createAction('[Blog] Load Articles');

export const loadSuccess = createAction(
  '[Blog] Load Success',
  props<{ articles: Article[] }>()
);

export const loadFailure = createAction(
  '[Blog] Load Failure',
  props<{ error: string }>()
);

export const setCurrentArticle = createAction(
  '[Blog] Set Current Article',
  props<{ currentArticleId: string }>()
);
