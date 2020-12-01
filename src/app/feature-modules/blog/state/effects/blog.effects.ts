import { BlogService } from './../../services/blog.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as BlogActions from '../actions/blog.actions';
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
      ofType(BlogActions.loadArticles),
      mergeMap(() =>
        this.blogService.getArticles().pipe(
          map((articles) => BlogActions.loadSuccess({ articles })),
          catchError((error) => of(BlogActions.loadFailure({ error })))
        )
      )
    )
  );

  postArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.postArticle),
      concatMap((action) =>
        this.blogService.postArticle(action.articleRequest).pipe(
          map((article) => BlogActions.postArticleSuccess({ article })),
          tap(() => this.router.navigate(['list'])),
          catchError((error) => of(BlogActions.loadFailure({ error })))
        )
      ),
    ),
    // { dispatch: false },
  );
}
