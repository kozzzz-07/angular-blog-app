import { ArticleID, ArticleUpdateDto } from './../../../models/blog.model';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EditPresenter implements OnDestroy {
  private subject: Subject<ArticleUpdateDto> = new Subject();
  update$ = this.subject.asObservable();

  ngOnDestroy(): void {
    this.subject.complete();
  }

  update(id: ArticleID, title: string, body: string): void {
    const excerpt = body.length < 250 ? body : body.slice(250);

    this.subject.next({
      id,
      title,
      body,
      excerpt,
      updatedAt: new Date().toISOString(), // バック側でやるもんだけど、勉強用アプリなので
    });
  }
}
