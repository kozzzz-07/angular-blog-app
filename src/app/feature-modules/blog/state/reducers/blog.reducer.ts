import { Action, createReducer, on } from '@ngrx/store';
import { ArticleID, Article } from '../../models/blog.model';
import * as BlogActions from '../actions/blog.actions';

export const blogFeatureKey = 'blog';

export interface State {
  currentBlogId: ArticleID | null;
  articles: Article[];
  error: string;
}

export const initialState: State = {
  currentBlogId: null,
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
  })
);
