import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';


const routes: Routes = [
  { path: '', component: MainLayoutComponent, loadChildren: () => import(`../../../modules/admin/login/login.module`).then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginLayoutRoutingModule { }
