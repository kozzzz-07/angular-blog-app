import { ArticleRequest } from './../../../models/blog.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../../state/reducers';
import * as fromBlogActions from '../../../state/actions/blog.actions-page';

@Component({
  selector: 'app-container-new',
  templateUrl: './new.container.html',
  styleUrls: ['./new.container.scss']
})
export class NewContainerComponent implements OnInit {

  constructor(private readonly store: Store<State>, private readonly router: Router) { }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate(['/list']);
  }

  onPost(articleRequest: ArticleRequest): void {
    this.store.dispatch(fromBlogActions.postArticle({articleRequest}));
  }
}
