import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ArticleRequest } from '../../../models/blog.model';

@Injectable()
export class NewPresenter implements OnDestroy {
  private subject: Subject<ArticleRequest> = new Subject();
  post$ = this.subject.asObservable();

  ngOnDestroy(): void {
    this.subject.complete();
  }

  post(title: string, body: string): void {
    const excerpt = body.length < 250 ? body : body.slice(250);

    this.subject.next({
      title,
      body,
      excerpt,
      createAt: new Date().toISOString(), // バック側でやるもんだけど、勉強用アプリなので
    });
  }
}
