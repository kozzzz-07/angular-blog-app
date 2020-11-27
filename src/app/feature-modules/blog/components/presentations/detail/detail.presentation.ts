import { Component, OnInit, Input } from '@angular/core';
import { BlogDate } from '../../../models/blog.model';

@Component({
  selector: 'app-presentation-detail',
  templateUrl: './detail.presentation.html',
  styleUrls: ['./detail.presentation.scss'],
})
export class DetailPresentationComponent implements OnInit {
  @Input() title!: string;
  @Input() date!: BlogDate;
  @Input() body!: string;

  constructor() {}

  ngOnInit(): void {}
}
