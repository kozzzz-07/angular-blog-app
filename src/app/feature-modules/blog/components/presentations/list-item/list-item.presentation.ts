import { Component, OnInit, Input } from '@angular/core';
import { BlogDate } from '../../../models/blog.model';

@Component({
  selector: 'app-presentation-list-item',
  templateUrl: './list-item.presentation.html',
  styleUrls: ['./list-item.presentation.scss'],
})
export class ListItemPresentationComponent implements OnInit {
  @Input() title!: string;
  @Input() date!: BlogDate;
  @Input() excerpt!: string;

  constructor() {}

  ngOnInit(): void {}
}

// Memo: ListPresentationComponentと強く紐付くので、listフォルダ配下に入れたほうがわかりやすい？
