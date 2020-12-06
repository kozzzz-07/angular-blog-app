import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoFacade } from '../../../state/facades/blog.facade';

@Component({
  selector: 'app-container-detail',
  templateUrl: './detail.container.html',
  styleUrls: ['./detail.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailContainerComponent implements OnInit {
  @Input() articleId!: string;

  selectedArticle$ = this.facade.selectedArticle$;

  constructor(
    private readonly router: Router,
    private readonly facade: TodoFacade,
  ) {}

  ngOnInit(): void {
    this.facade.setCurrentArticle(this.articleId);
  }

  onBack(): void {
    this.router.navigate(['/list']);
  }
}
