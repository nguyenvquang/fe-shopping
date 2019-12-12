import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ICanactive} from './modules/sercurity/i-canactive';


const routes: Routes = [
  { path: '', loadChildren: () => import(`./modules/layouts/guest/guest-layout.module`).then(m => m.GuestLayoutModule)},
  { path: '', loadChildren: () => import(`./modules/layouts/guest/guest-layout.module`).then(m => m.GuestLayoutModule)},
  { path: 'admin', loadChildren: () => import(`./modules/layouts/admin/admin-layout.module`).then(m => m.AdminLayoutModule)},
  { path: '', loadChildren: () => import(`./modules/layouts/login/login-layout.module`).then(m => m.LoginLayoutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
