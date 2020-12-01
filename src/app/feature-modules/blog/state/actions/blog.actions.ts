import { ArticleRequest } from './../../models/blog.model';
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

export const setCurrentArticle = createAction(
  '[Blog Page] Set Current Article',
  props<{ currentArticleId: string }>()
);

export const postArticle = createAction('[Blog Page] Post Article', props<{ articleRequest: ArticleRequest }>());

export const postArticleSuccess = createAction(
  '[Blog API] Post Article Success',
  props<{ article: Article }>()
);

export const postArticleFailure = createAction(
  '[Blog API] Post Article Failure',
  props<{ error: string }>()
);
