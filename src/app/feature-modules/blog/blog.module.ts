import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogStateModule } from './state/blog-state.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlogRoutingModule, BlogStateModule],
})
export class BlogModule {}
