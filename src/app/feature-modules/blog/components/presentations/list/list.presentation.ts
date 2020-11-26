import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../../models/blog.model';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './list.presentation.html',
  styleUrls: ['./list.presentation.scss'],
})
export class ListPresentationComponent implements OnInit {
  @Input() articles: Article[] = [];

  constructor() {}

  ngOnInit(): void {}
}
