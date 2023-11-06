import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }


  http = inject(HttpClient);
  API = "http://localhost:8080/api/administrador";

  save(admin: Admin): Observable<Admin> {
    if (admin.id !== undefined && admin.id > 0) {
      return this.update(admin);
    }
    return this.http.post<Admin>(this.API, admin);
  }

  update(pessoa: Partial<Admin>) {
    return this.http.put<Admin>(`${this.API}/${pessoa.id}`, pessoa);
  }

  loadById(id: number) {
    return this.http.get<Admin>(`${this.API}/${id}`);
  }


}
