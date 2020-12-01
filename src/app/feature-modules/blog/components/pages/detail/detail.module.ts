import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailPageComponent } from './detail.page';
import { DetailContainerComponent } from '../../containers/detail/detail.container';
import { DetailPresentationComponent } from '../../presentations/detail/detail.presentation';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DetailPageComponent,
    DetailContainerComponent,
    DetailPresentationComponent,
  ],
  imports: [CommonModule, DetailRoutingModule, SharedModule],
})
export class DetailModule {}
