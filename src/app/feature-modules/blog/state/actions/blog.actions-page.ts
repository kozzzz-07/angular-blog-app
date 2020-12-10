import { ArticlePostDto, ArticleUpdateDto } from '../../models/blog.model';
import { createAction, props } from '@ngrx/store';

export const loadArticles = createAction('[Blog Page] Load Articles');

export const setCurrentArticle = createAction(
  '[Blog Page] Set Current Article',
  props<{ currentArticleId: string }>()
);

export const postArticle = createAction(
  '[Blog Page] Post Article',
  props<{ article: ArticlePostDto }>()
);

export const updateArticle = createAction(
  '[Blog Page] Update Article',
  props<{ article: ArticleUpdateDto }>()
);
