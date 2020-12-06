import { ArticleID, ArticleRequest } from './../../models/blog.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromBlogActions from '../actions/blog.actions-page';
import { State } from '../reducers';
import { getArticles, getCurrentArticle } from '../selectors/blog.selectors';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodoFacade {

  selectedArticle$ = this.store.select(getCurrentArticle);

  articles$ = this.store.select(getArticles).pipe(
    // 降順
    map((articles) =>
      [...articles].sort((a, b) => {
        const dateA = new Date(a.updateAt || a.createAt);
        const dateB = new Date(b.updateAt || b.createAt);
        return dateB.getTime() - dateA.getTime();
      })
    )
  );

  constructor(private readonly store: Store<State>) {}

  setCurrentArticle(id: ArticleID): void {
    this.store.dispatch(
      fromBlogActions.setCurrentArticle({ currentArticleId: id })
    );
  }

  loadArticles(): void {
    this.store.dispatch(fromBlogActions.loadArticles());
  }

  postArticle(articleRequest: ArticleRequest): void {
    this.store.dispatch(fromBlogActions.postArticle({articleRequest}));
  }
}

