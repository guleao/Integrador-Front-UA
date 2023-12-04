import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';

import { IndexComponent } from './layout/index/index.component';
import { CadastrodetailsComponent } from './pages/cadastro/cadastrodetails/cadastrodetails.component';
import { CadastrolistComponent } from './pages/cadastro/cadastrolist/cadastrolist.component';
import { PessoaResolver } from './guards/pessoa.resolver';
import { CadastroAtividadelistComponent } from './pages/atividades/cadastro-atividadelist/cadastro-atividadelist.component';
import { CadastroAtividadedetailsComponent } from './pages/atividades/cadastro-atividadedetails/cadastro-atividadedetails.component';
import { AtividadeResolver } from './guards/atividade.resolver';
import { CadastroadminComponent } from './pages/admin/cadastroadmin/cadastroadmin.component';
import { AdminResolver } from './guards/admin.resolver';

const routes: Routes = [

  { path: "login", component: LoginComponent },



  {
    path: "home", component: IndexComponent, children: [
      { path: "cadastro", component: CadastrolistComponent },
      { path: "novocadastro", component: CadastrodetailsComponent },
      { path: 'cadastro/edit/:id', component: CadastrodetailsComponent, resolve: { pessoa: PessoaResolver } },
      { path: "cadastroAdmin", component: CadastroadminComponent },
      { path: "perfilAdmin/:id", component: CadastroadminComponent, resolve: { admin: AdminResolver } },



      { path: "agenda", component: CadastroAtividadelistComponent },
      { path: "cadastroAtividade", component: CadastroAtividadedetailsComponent },
      { path: 'agenda/edit/:id', component: CadastroAtividadedetailsComponent, resolve: { atividade: AtividadeResolver } }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
