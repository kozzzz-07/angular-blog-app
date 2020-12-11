import { ArticleID } from './../../../models/blog.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BlogFacade } from '../../../state/facades/blog.facade';

@Component({
  selector: 'app-container-list',
  templateUrl: './list.container.html',
  styleUrls: ['./list.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListContainerComponent implements OnInit {
  articles$ = this.facade.articles$;

  constructor(
    private readonly router: Router, // TODO: pageに移動する?
    private readonly facade: BlogFacade,
  ) {}

  ngOnInit(): void {
    this.facade.loadArticles();
  }

  onReadMore(id: ArticleID): void {
    // ルーターで飛ぶ
    this.router.navigate([id]);
  }
}
