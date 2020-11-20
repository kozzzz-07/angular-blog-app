import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-presentation-list-item',
  templateUrl: './list-item.presentation.html',
  styleUrls: ['./list-item.presentation.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemPresentationComponent implements OnInit {
  @Input() title!: string;
  @Input() date!: Date;
  @Input() excerpt!: string;

  constructor() {}

  ngOnInit(): void {}
}
