import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';
import { EditPageComponent } from './edit.page';
import { EditContainerComponent } from '../../containers/edit/edit.container';
import { EditPresentationComponent } from '../../presentations/edit/edit.presentation';

@NgModule({
  declarations: [
    EditPageComponent,
    EditContainerComponent,
    EditPresentationComponent,
  ],
  imports: [CommonModule, EditRoutingModule],
})
export class EditModule {}
