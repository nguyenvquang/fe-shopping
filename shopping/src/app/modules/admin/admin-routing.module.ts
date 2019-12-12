import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ICanactive} from '../sercurity/i-canactive';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ICanactive] },
  { path: '', loadChildren: () => import(`../admin/product/product.module`).then(m => m.ProductModule), canActivate: [ICanactive] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
