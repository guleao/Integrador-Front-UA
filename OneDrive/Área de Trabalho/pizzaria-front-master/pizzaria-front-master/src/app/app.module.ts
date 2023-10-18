import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { LoginComponent } from './sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PedidosdetailsComponent } from './pages/pedidos/pedidosdetails/pedidosdetails.component';
import { PedidoslistComponent } from './pages/pedidos/pedidoslist/pedidoslist.component';
import { ProdutosdetailsComponent } from './pages/produtos/produtosdetails/produtosdetails.component';
import { ProdutoslistComponent } from './pages/produtos/produtoslist/produtoslist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardapioDetailsComponent } from './pages/cardapio/cardapio-details/cardapio-details.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent,
    CardapioComponent,
    LoginComponent,
    InicioComponent,
    PedidosdetailsComponent,
    PedidoslistComponent,
    ProdutosdetailsComponent,
    ProdutoslistComponent,
    CardapioDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
