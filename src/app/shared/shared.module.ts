import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [MainNavComponent, CardComponent, ButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, ButtonComponent],
})
export class SharedModule {}
