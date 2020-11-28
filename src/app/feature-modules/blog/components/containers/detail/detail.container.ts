import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Article } from '../../../models/blog.model';
import { setCurrentArticle } from '../../../state/actions/blog.actions';
import { State } from '../../../state/reducers';
import { getCurrentArticle } from '../../../state/selectors/blog.selectors';

@Component({
  selector: 'app-container-detail',
  templateUrl: './detail.container.html',
  styleUrls: ['./detail.container.scss'],
})
export class DetailContainerComponent implements OnInit {
  @Input() articleId!: string;

  selectedArticle$ = this.store.select(getCurrentArticle);

  constructor(private readonly store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(setCurrentArticle({currentArticleId: this.articleId}));
  }
}
