import { ArticlePostDto } from './../../../models/blog.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewPresenter } from './new.presenter';

@Component({
  selector: 'app-presentation-new',
  templateUrl: './new.presentation.html',
  styleUrls: ['./new.presentation.scss'],
  providers: [NewPresenter],
})
export class NewPresentationComponent implements OnInit {
  @Output() back = new EventEmitter<void>();
  @Output() post = new EventEmitter<ArticlePostDto>();

  title = '';
  body = '';

  constructor(private readonly presenter: NewPresenter) {}

  ngOnInit(): void {
    this.presenter.post$.subscribe((articlePostDto) => {
      this.post.emit(articlePostDto);
    });
  }

  onPost(): void {
    this.presenter.post(this.title, this.body);
  }
}
