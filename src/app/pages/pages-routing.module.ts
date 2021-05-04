import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { NgxLoginComponent } from 'app/auth/login/login.component';
import { NbAuthComponent, NbLoginComponent } from '@nebular/auth';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    //   path: 'ngx-login',
    //   component: NgxLoginComponent,

    // },
    {
      path: '',
      redirectTo: 'main-dashboard',
      pathMatch: 'full',
    },
    {
      path: 'main-dashboard',
      component: MainComponent,

    },
    {
      path: 'sense-dashboard/:deviceIp',
      component: DashboardComponent,
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
