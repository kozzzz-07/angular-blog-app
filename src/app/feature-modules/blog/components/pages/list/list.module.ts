import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './list.page';
import { ListContainerComponent } from '../../containers/list/list.container';
import { ListPresentationComponent } from '../../presentations/list/list.presentation';
import { ListItemPresentationComponent } from '../../presentations/list-item/list-item.presentation';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListPageComponent,
    ListContainerComponent,
    ListPresentationComponent,
    ListItemPresentationComponent,
  ],
  imports: [CommonModule, ListRoutingModule, SharedModule],
})
export class ListModule {}
