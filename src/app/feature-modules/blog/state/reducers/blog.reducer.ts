import { createReducer, on } from '@ngrx/store';
import { ArticleID, Article } from '../../models/blog.model';
import * as BlogApiActions from '../actions/blog.actions-api';
import * as BlogPageActions from '../actions/blog.actions-page';

export const blogFeatureKey = 'blog';

export interface State {
  currentArticleId: ArticleID | null;
  articles: Article[];
  error: string;
}

export const initialState: State = {
  currentArticleId: null,
  articles: [],
  error: '',
};

export const blogReducer = createReducer<State>(
  initialState,
  on(BlogApiActions.loadSuccess, (state, action) => {
    return {
      ...state,
      articles: action.articles,
      error: '',
    };
  }),
  on(BlogApiActions.loadFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(BlogPageActions.setCurrentArticle, (state, action) => {
    return {
      ...state,
      currentArticleId: action.currentArticleId,
    };
  }),
  on(BlogApiActions.postArticleSuccess, (state, action) => {
    return {
      article: action.article,
      ...state,
      error: '',
    };
  }),
  on(BlogApiActions.postArticleFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
