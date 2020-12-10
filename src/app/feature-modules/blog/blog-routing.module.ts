import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    pathMatch: 'full',
    loadChildren: () =>
      import('./components/pages/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'new',
    pathMatch: 'full',
    loadChildren: () =>
      import('./components/pages/new/new.module').then((m) => m.NewModule),
  },
  {
    path: ':id',
    pathMatch: 'full',
    loadChildren: () =>
      import('./components/pages/detail/detail.module').then(
        (m) => m.DetailModule
      ),
  },
  {
    path: ':id/edit',
    pathMatch: 'full',
    loadChildren: () =>
      import('./components/pages/edit/edit.module').then((m) => m.EditModule),
  },
  // TODO:edit
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
