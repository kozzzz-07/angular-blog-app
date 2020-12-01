import { createReducer, on } from '@ngrx/store';
import { ArticleID, Article } from '../../models/blog.model';
import * as BlogActions from '../actions/blog.actions';

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
  on(BlogActions.loadSuccess, (state, action) => {
    return {
      ...state,
      articles: action.articles,
      error: '',
    };
  }),
  on(BlogActions.loadFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(BlogActions.setCurrentArticle, (state, action) => {
    return {
      ...state,
      currentArticleId: action.currentArticleId,
    };
  }),
  on(BlogActions.postArticleSuccess, (state, action) => {
    return {
      article: action.article,
      ...state,
      error: '',
    };
  }),
  on(BlogActions.postArticleFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
