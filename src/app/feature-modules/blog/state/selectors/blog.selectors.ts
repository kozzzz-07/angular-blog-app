import { BlogState, blogStateFeatureKey, State } from './../reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { blogFeatureKey } from '../reducers/blog.reducer';

const getBlogFeatureState = createFeatureSelector<State, BlogState>(
  blogStateFeatureKey
);

export const getBlogEntitiesState = createSelector(
  getBlogFeatureState,
  (state) => state.blog
);

export const getArticles = createSelector(
  getBlogEntitiesState,
  (state) => state.articles
);

export const getCurrentArticleId = createSelector(
  getBlogEntitiesState,
  (state) => state.currentArticleId
);

export const getCurrentArticle = createSelector(
  getBlogEntitiesState,
  getCurrentArticleId,
  (state, currentArticleId) => {
    return currentArticleId ? state.articles.find(article => article.id === currentArticleId) : null;
  }
);
