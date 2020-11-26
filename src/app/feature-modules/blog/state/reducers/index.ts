import * as fromBlog from './blog.reducer';
import * as AppState from './../../../../state/app.state';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
  combineReducers,
} from '@ngrx/store';
import { environment } from '../../../../../environments/environment';

export const blogStateFeatureKey = 'blogState';

export interface BlogState {
  [fromBlog.blogFeatureKey]: fromBlog.State;
}

export interface State extends AppState.State {
  [blogStateFeatureKey]: BlogState;
}

export function reducers(state: BlogState | undefined, action: Action) {
  return combineReducers({
    [fromBlog.blogFeatureKey]: fromBlog.blogReducer,
  })(state, action);
}

export const metaReducers: MetaReducer<BlogState>[] = !environment.production
  ? []
  : [];
