import { BlogService } from './../../services/blog.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as BlogApiActions from '../actions/blog.actions-api';
import * as BlogPageActions from '../actions/blog.actions-page';
import { Router } from '@angular/router';

@Injectable()
export class BlogEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly blogService: BlogService,
    private readonly router: Router
  ) {}

  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogApiActions.loadArticles),
      mergeMap(() =>
        this.blogService.getArticles().pipe(
          map((articles) => BlogApiActions.loadSuccess({ articles })),
          catchError((error) => of(BlogApiActions.loadFailure({ error })))
        )
      )
    )
  );

  postArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogPageActions.postArticle),
      concatMap((action) =>
        this.blogService.postArticle(action.articleRequest).pipe(
          map((article) => BlogApiActions.postArticleSuccess({ article })),
          tap(() => this.router.navigate(['list'])),
          catchError((error) => of(BlogApiActions.loadFailure({ error })))
        )
      ),
    ),
    // { dispatch: false },
  );
}
