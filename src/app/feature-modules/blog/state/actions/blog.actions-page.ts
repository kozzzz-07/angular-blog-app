import { ArticleID, ArticlePostDto, ArticleUpdateDto } from '../../models/blog.model';
import { createAction, props } from '@ngrx/store';

export const loadArticles = createAction('[Blog Page] Load Articles');

export const setCurrentArticle = createAction(
  '[Blog Page] Set Current Article',
  props<{ currentArticleId: ArticleID }>()
);

export const postArticle = createAction(
  '[Blog Page] Post Article',
  props<{ article: ArticlePostDto }>()
);

export const updateArticle = createAction(
  '[Blog Page] Update Article',
  props<{ article: ArticleUpdateDto }>()
);

export const deleteArticle = createAction(
  '[Blog Page] Delete Article',
  props<{ articleId: ArticleID }>()
);

