import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './theme/layout/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/theme/view',
    pathMatch: 'full'
  },
  {
    path: 'theme',
    component: LayoutComponent,
    children: [
      {
        path: 'view',
        loadChildren: () =>
          import('./view/view.module').then((module) => module.ViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
