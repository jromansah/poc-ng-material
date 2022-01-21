import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    component: MainLayoutComponent,
    path: '',
    loadChildren: () =>
      import('./features/cockpit/cockpit.module').then((m) => m.CockpitModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
