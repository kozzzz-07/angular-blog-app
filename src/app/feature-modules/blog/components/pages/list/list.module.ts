import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './list.page';
import { ListContainerComponent } from '../../containers/list/list.container';
import { ListPresentationComponent } from '../../presentations/list/list.presentation';

@NgModule({
  declarations: [
    ListPageComponent,
    ListContainerComponent,
    ListPresentationComponent,
  ],
  imports: [CommonModule, ListRoutingModule],
})
export class ListModule {}
