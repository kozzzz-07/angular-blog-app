import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewPageComponent } from './new.page';
import { NewContainerComponent } from '../../containers/new/new.container';
import { NewPresentationComponent } from '../../presentations/new/new.presentation';

@NgModule({
  declarations: [
    NewPageComponent,
    NewContainerComponent,
    NewPresentationComponent,
  ],
  imports: [CommonModule, NewRoutingModule],
})
export class NewModule {}
