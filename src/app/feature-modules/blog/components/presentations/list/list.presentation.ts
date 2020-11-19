import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../../models/blog.model';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './list.presentation.html',
  styleUrls: ['./list.presentation.scss'],
})
export class ListPresentationComponent implements OnInit {
  articles$!: Observable<Article[]>;

  constructor() {
    // mock
    this.articles$ = of([
      { id: 'a', title: 'a', eexcerpt: 'a', createAt: new Date() },
      { id: 'b', title: 'b', eexcerpt: 'bbbbbbb', createAt: new Date() },
    ]);
  }

  ngOnInit(): void {}
}
