import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';


const routes: Routes = [
  { path: '', component: MainLayoutComponent, loadChildren: () => import(`../../../modules/guest/guest.module`).then(m => m.GuestModule)},
  { path: 'home', component: MainLayoutComponent, loadChildren: () => import(`../../../modules/guest/guest.module`).then(m => m.GuestModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestLayoutRoutingModule { }
