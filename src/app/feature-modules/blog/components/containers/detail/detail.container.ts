import { ArticleID } from './../../../models/blog.model';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogFacade } from '../../../state/facades/blog.facade';

@Component({
  selector: 'app-container-detail',
  templateUrl: './detail.container.html',
  styleUrls: ['./detail.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailContainerComponent implements OnInit {
  @Input() id!: ArticleID;

  selectedArticle$ = this.facade.selectedArticle$;

  constructor(
    private readonly router: Router,
    private readonly facade: BlogFacade,
  ) {}

  ngOnInit(): void {
    this.facade.setCurrentArticle(this.id);
  }

  onBack(): void {
    this.router.navigate(['/list']);
  }

  onUpdate(id: ArticleID): void {
    this.router.navigate([id, 'edit']);
  }

  onDelete(id: ArticleID): void {
    // TODO: ダイアログとかにしたい
    if (!confirm('消していいですか？')) {
      return;
    }
    this.facade.dleteArticle(id);
  }
}
