import { ArticleRequest } from './../../../models/blog.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-presentation-new',
  templateUrl: './new.presentation.html',
  styleUrls: ['./new.presentation.scss'],
})
export class NewPresentationComponent implements OnInit {
  @Output() back = new EventEmitter<void>();
  @Output() post = new EventEmitter<ArticleRequest>();

  title = '';
  body = '';

  constructor() {}

  ngOnInit(): void {}

  onPost(): void {
    const params: ArticleRequest = {
      title: this.title,
      body: this.body,
      createAt: new Date().toISOString(), // バック側でやるもんだけど、勉強用アプリなので
    };
    this.post.emit(params);
  }
}
