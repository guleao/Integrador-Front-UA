import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';
import { RecuperarComponent } from './sistema/recuperar/recuperar.component';
import { CodigoComponent } from './sistema/codigo/codigo.component';
import { NovasenhaComponent } from './sistema/novasenha/novasenha.component';
import { IndexComponent } from './layout/index/index.component';
import { CadastrodetailsComponent } from './pages/cadastro/cadastrodetails/cadastrodetails.component';
import { CadastrolistComponent } from './pages/cadastro/cadastrolist/cadastrolist.component';

const routes: Routes = [

  {path: "", component: LoginComponent},

  {path: "recuperar", component: RecuperarComponent},
  {path: "codigo", component: CodigoComponent},
  {path: "novasenha", component: NovasenhaComponent},

  {path: "home", component: IndexComponent, children: [
    {path:"cadastro", component: CadastrolistComponent},
    {path:"novocadastro", component: CadastrodetailsComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
