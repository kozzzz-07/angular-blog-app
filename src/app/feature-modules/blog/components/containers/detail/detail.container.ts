import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setCurrentArticle } from '../../../state/actions/blog.actions-page';
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

  constructor(
    private readonly store: Store<State>,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      setCurrentArticle({ currentArticleId: this.articleId })
    );
  }

  onBack(): void {
    this.router.navigate(['/list']);
  }
}
