import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './layout/index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RecuperarComponent } from './sistema/recuperar/recuperar.component';
import { CodigoComponent } from './sistema/codigo/codigo.component';
import { NovasenhaComponent } from './sistema/novasenha/novasenha.component';
import { CadastrodetailsComponent } from './pages/cadastro/cadastrodetails/cadastrodetails.component';
import { CadastrolistComponent } from './pages/cadastro/cadastrolist/cadastrolist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    RecuperarComponent,
    CodigoComponent,
    NovasenhaComponent,
    CadastrodetailsComponent,
    CadastrolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
