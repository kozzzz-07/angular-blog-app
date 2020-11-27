import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../../models/blog.model';

@Component({
  selector: 'app-container-detail',
  templateUrl: './detail.container.html',
  styleUrls: ['./detail.container.scss'],
})
export class DetailContainerComponent implements OnInit {
  article$!: Observable<Article>;

  constructor() {}

  ngOnInit(): void {
    this.article$ = of(
      { id: 'b', title: 'b', body: 'bbbbbbb', excerpt: 'bbb' , createAt: new Date() },
    );
  }
}
