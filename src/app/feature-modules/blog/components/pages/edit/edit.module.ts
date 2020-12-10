import { SharedModule } from './../../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';
import { EditPageComponent } from './edit.page';
import { EditContainerComponent } from '../../containers/edit/edit.container';
import { EditPresentationComponent } from '../../presentations/edit/edit.presentation';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditPageComponent,
    EditContainerComponent,
    EditPresentationComponent,
  ],
  imports: [CommonModule, EditRoutingModule, SharedModule, FormsModule],
})
export class EditModule {}
