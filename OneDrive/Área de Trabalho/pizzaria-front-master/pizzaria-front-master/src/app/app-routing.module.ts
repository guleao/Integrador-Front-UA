import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PedidoslistComponent } from './pages/pedidos/pedidoslist/pedidoslist.component';
import { ProdutoslistComponent } from './pages/produtos/produtoslist/produtoslist.component';


const routes: Routes = [
  { path:"", component: IndexComponent, children:[
    {path:"cardapio", component: CardapioComponent},
    {path:"inicio", component: InicioComponent},
    {path:"pedidos", component: PedidoslistComponent},
    {path:"produtos", component: ProdutoslistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
