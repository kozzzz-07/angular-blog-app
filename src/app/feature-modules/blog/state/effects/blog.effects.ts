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

  postArticle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BlogPageActions.postArticle),
        concatMap((action) =>
          this.blogService.postArticle(action.article).pipe(
            map((article) => BlogApiActions.postArticleSuccess({ article })),
            tap(() => this.router.navigate(['list'])),
            catchError((error) =>
              of(BlogApiActions.postArticleFailure({ error }))
            )
          )
        )
      )
    // { dispatch: false },
  );

  updateArticle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BlogPageActions.updateArticle),
        concatMap((action) =>
          this.blogService
            .updateArticle(action.article.id, action.article)
            .pipe(
              map((article) =>
                BlogApiActions.deleteArticleSuccess({ article })
              ),
              // tap(() => this.router.navigate(['detail'])), // TODO: 詳細に戻った時に、情報が無い
              tap(() => this.router.navigate(['list'])),
              catchError((error) =>
                of(BlogApiActions.updateArticleFailure({ error }))
              )
            )
        )
      )
    // { dispatch: false },
  );

  deleteArticle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BlogPageActions.deleteArticle),
        concatMap((action) =>
          this.blogService
            .deleteArticle(action.articleId)
            .pipe(
              map((article) =>
                BlogApiActions.deleteArticleSuccess({ article })
              ),
              tap(() => this.router.navigate(['list'])),
              catchError((error) =>
                of(BlogApiActions.deleteArticleFailure({ error }))
              )
            )
        )
      )
    // { dispatch: false },
  );
}
