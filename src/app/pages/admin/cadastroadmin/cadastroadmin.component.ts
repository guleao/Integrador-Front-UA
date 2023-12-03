import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-cadastroadmin',
  templateUrl: './cadastroadmin.component.html',
  styleUrls: ['./cadastroadmin.component.scss']
})
export class CadastroadminComponent {
  admin: Admin = new Admin();
  adminParaEditar!: Admin;

  @Output() edit = new EventEmitter();
  registrarAdmService = inject(AdminService);

  constructor(private route: ActivatedRoute) { }


  save() {
    if (this.admin.id > 0) {
      this.registrarAdmService.update(this.admin).subscribe({
        next: retorno => {
          console.log(retorno);
          alert("Atualizado com sucesso");
        },
        error: erro => {
          console.log(erro);
          alert('ERRO CABULOSO, VEJA O CONSOLE');
        }
      });
    } else {
      this.registrarAdmService.save(this.admin).subscribe({
        next: retorno => {
          console.log(retorno);
          alert("Registrado com sucesso");
        },
        error: erro => {
          console.log(erro);
        }
      });
    }
  }

  onEdit(admin: Admin) {
    this.edit.emit(admin);
  }

  ngOnInit(): void {
    const admin: Admin = this.route.snapshot.data['admin'];

    this.admin.id = admin.id;
    this.admin.nomeAdm = admin.nomeAdm;
    this.admin.username = admin.username;
    this.admin.token = admin.token;
    this.admin.telefone = admin.telefone
    
    console.log(admin);
  }

  

}
