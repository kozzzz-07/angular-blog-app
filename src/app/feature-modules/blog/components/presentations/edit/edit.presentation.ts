import { ArticleUpdateDto } from './../../../models/blog.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleID } from '../../../models/blog.model';
import { EditPresenter } from './edit.presenter';

@Component({
  selector: 'app-presentation-edit',
  templateUrl: './edit.presentation.html',
  styleUrls: ['./edit.presentation.scss'],
  providers: [EditPresenter],
})
export class EditPresentationComponent implements OnInit {
  @Input() id!: ArticleID;
  @Input() title!: string;
  @Input() body!: string;
  @Output() back = new EventEmitter<void>();
  @Output() update = new EventEmitter<ArticleUpdateDto>();

  constructor(private readonly presenter: EditPresenter) {}

  ngOnInit(): void {
    this.presenter.update$.subscribe((article: ArticleUpdateDto) => {
      this.update.emit(article);
    });
  }

  onUpdate(): void {
    console.log(this.id);

    this.presenter.update(this.id, this.title, this.body);
  }
}
