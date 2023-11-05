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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { CadastroAtividadedetailsComponent } from './pages/atividades/cadastro-atividadedetails/cadastro-atividadedetails.component';
import { CadastroAtividadelistComponent } from './pages/atividades/cadastro-atividadelist/cadastro-atividadelist.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AtividadeListDialogComponent } from './dialogs/atividade-list-dialog/atividade-list-dialog.component';
import { MatButtonModule } from '@angular/material/button';








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
    CadastrolistComponent,
    CadastroAtividadedetailsComponent,
    CadastroAtividadelistComponent,
    AtividadeListDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
