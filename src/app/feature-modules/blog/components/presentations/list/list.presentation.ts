import { ArticleID } from './../../../models/blog.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../models/blog.model';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './list.presentation.html',
  styleUrls: ['./list.presentation.scss'],
})
export class ListPresentationComponent implements OnInit {
  @Input() articles: Article[] = [];
  @Output() readMore = new EventEmitter<ArticleID>();

  constructor() {}

  ngOnInit(): void {}
}
