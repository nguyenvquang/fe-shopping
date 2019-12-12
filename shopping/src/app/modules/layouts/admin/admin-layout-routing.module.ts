import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';


const routes: Routes = [
  { path: '', component: MainLayoutComponent, loadChildren: () => import(`../../../modules/admin/admin.module`).then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
