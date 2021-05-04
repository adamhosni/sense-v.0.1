import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbAuthComponent } from '@nebular/auth';  // <---
import { MainComponent } from 'app/pages/main/main.component';
import { NgxLoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,  // <---
    children: [
      {
        path: 'login',
        component: NgxLoginComponent, // <---
      },
    ],
  },

  // {
  //   path: 'main-dashboard/:jwToken',
  //   component: MainComponent,

  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
