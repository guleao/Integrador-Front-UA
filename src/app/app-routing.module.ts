import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';
import { RecuperarComponent } from './sistema/recuperar/recuperar.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "recuperar", component: RecuperarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
