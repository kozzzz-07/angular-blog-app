import { BlogService } from './../../services/blog.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as BlogActions from '../actions/blog.actions';

@Injectable()
export class BlogEffects {
  constructor(private actions$: Actions, private blogService: BlogService) {}

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
}
