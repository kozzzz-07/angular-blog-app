import { getArticles } from './../../../state/selectors/blog.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../state/reducers';
import * as fromBlogActions from '../../../state/actions/blog.actions';

@Component({
  selector: 'app-container-list',
  templateUrl: './list.container.html',
  styleUrls: ['./list.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListContainerComponent implements OnInit {
  articles$ = this.store.select(getArticles);

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(fromBlogActions.loadArticles());
  }
}
