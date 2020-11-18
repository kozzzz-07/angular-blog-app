import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [MainNavComponent, CardComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent],
})
export class SharedModule {}
