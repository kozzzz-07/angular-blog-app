import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ArticlePostDto } from '../../../models/blog.model';

@Injectable()
export class NewPresenter implements OnDestroy {
  private subject: Subject<ArticlePostDto> = new Subject();
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
      createdAt: new Date().toISOString(), // バック側でやるもんだけど、勉強用アプリなので
    });
  }
}
