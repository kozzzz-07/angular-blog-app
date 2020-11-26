import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailPageComponent } from './detail.page';

@NgModule({
  declarations: [DetailPageComponent],
  imports: [CommonModule, DetailRoutingModule],
})
export class DetailModule {}
