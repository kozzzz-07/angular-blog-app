import { BlogFacade } from './../../../state/facades/blog.facade';
import { ArticlePostDto } from './../../../models/blog.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-new',
  templateUrl: './new.container.html',
  styleUrls: ['./new.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewContainerComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly facade: BlogFacade
  ) {}

  ngOnInit(): void {}

  onBack(): void {
    this.router.navigate(['/list']);
  }

  onPost(article: ArticlePostDto): void {
    this.facade.postArticle(article);
  }
}
