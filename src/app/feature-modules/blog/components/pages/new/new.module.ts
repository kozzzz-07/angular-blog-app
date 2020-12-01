import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewPageComponent } from './new.page';
import { NewContainerComponent } from '../../containers/new/new.container';
import { NewPresentationComponent } from '../../presentations/new/new.presentation';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewPageComponent,
    NewContainerComponent,
    NewPresentationComponent,
  ],
  imports: [CommonModule, NewRoutingModule, SharedModule, FormsModule],
})
export class NewModule {}
