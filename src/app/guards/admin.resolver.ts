import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AtividadeService } from '../services/atividade.service';
import { Atividade } from '../models/atividade';
import { Observable, of } from 'rxjs';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminResolver implements Resolve<Admin> {

  admin: Admin = new Admin();

  constructor(private service: AdminService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Admin> {
    if (route.params && route.params['id']) {

      return this.service.loadById(route.params['id'])
    }
    const admNull: Admin = {
      id: 0,
      nomeAdm: '',
      username: '',
      token: '',
      telefone: '',
      role: ''
    
    };
    return of(admNull);
  }
}
