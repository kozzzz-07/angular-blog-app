import { ArticleID } from './../../../models/blog.model';
import { getArticles } from './../../../state/selectors/blog.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../state/reducers';
import * as fromBlogActions from '../../../state/actions/blog.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-list',
  templateUrl: './list.container.html',
  styleUrls: ['./list.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListContainerComponent implements OnInit {
  articles$ = this.store.select(getArticles);

  constructor(
    private readonly store: Store<State>,
    private readonly router: Router // TODO: pageに移動する
  ) {}

  ngOnInit(): void {
    // TODO: Facadeを用意する
    this.store.dispatch(fromBlogActions.loadArticles());
  }

  onReadMore(id: ArticleID): void {
    // ルーターで飛ぶ
    this.router.navigate([id]);
  }
}
