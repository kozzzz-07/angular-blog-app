import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPageComponent } from './edit.page';

const routes: Routes = [{ path: '', component: EditPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRoutingModule {}
