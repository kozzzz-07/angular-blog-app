import { ArticleID } from './../../../models/blog.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BlogDate } from '../../../models/blog.model';

@Component({
  selector: 'app-presentation-detail',
  templateUrl: './detail.presentation.html',
  styleUrls: ['./detail.presentation.scss'],
})
export class DetailPresentationComponent implements OnInit {
  @Input() id!: ArticleID;
  @Input() title!: string;
  @Input() date!: BlogDate;
  @Input() body!: string;
  @Output() back = new EventEmitter<void>();
  @Output() update = new EventEmitter<ArticleID>();
  @Output() delete = new EventEmitter<ArticleID>();

  constructor() {}

  ngOnInit(): void {}
}
