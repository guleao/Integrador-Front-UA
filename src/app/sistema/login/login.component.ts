import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginC: Login = new Login();

  loginService = inject(LoginService);

  constructor(private router: Router, private fb: FormBuilder) { }

  login() {
    if (!this.loginC.email && !this.loginC.senha) {
      alert('Login Inválido');
      return;
    }

    this.loginService.save(this.loginC).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.mensagem == "Login realizado com sucesso" && resultData.status == true) {
        this.router.navigateByUrl('/home');
      }
      else if (resultData.mensagem == "Email inválido" && resultData.status == false) {
        alert("Email inválido");
      }
      else if (resultData.mensagem == "Senha inválida" && resultData.status == false) {
        alert("Senha Inválida");
      }
      else if (resultData.mensagem == "Login Inválido" && resultData.status == false) {
        alert("Login inválido");
      }
    });
  }
}
