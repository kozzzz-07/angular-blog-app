import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './shared/main-nav/main-nav.component';

const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children: [
      { path: '', redirectTo: '/list', pathMatch: 'full' },
      {
        path: 'list',
        loadChildren: () =>
          import('./feature-modules/blog/blog.module').then(
            (m) => m.BlogModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
