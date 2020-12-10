import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleID, ArticleUpdateDto } from '../../../models/blog.model';
import { TodoFacade } from '../../../state/facades/blog.facade';

@Component({
  selector: 'app-container-edit',
  templateUrl: './edit.container.html',
  styleUrls: ['./edit.container.scss'],
})
export class EditContainerComponent implements OnInit {
  @Input() id!: ArticleID;

  selectedArticle$ = this.facade.selectedArticle$;

  constructor(
    private readonly router: Router,
    private readonly facade: TodoFacade
  ) {}

  ngOnInit(): void {}

  onBack(): void {
    this.router.navigate(['/list']);
  }

  onUpdate(article: ArticleUpdateDto): void {
    this.facade.updateArticle(article);
  }
}
