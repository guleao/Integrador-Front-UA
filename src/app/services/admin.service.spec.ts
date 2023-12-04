import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminService } from './admin.service';
import { Admin } from '../models/admin';

describe('AdminService', () => {
  let service: AdminService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(AdminService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('teste metodo update', () => {
    const mockAdmin: Admin = {
      id: 2,
      nomeAdm: 'tstAdm',
      username: 'tstUser',
      token: 'tstToken',
      telefone: 'tstTel',
      role: 'ADMIN'
    };

    service.update(mockAdmin).subscribe((response) => {
      expect(response).toEqual(mockAdmin);
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/api/administrador/${mockAdmin.id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(mockAdmin);
  });

  it('teste load by id', () => {
    const adminId = 1;
    const mockAdmin: Admin = {
      id: 1,
      nomeAdm: 'tstAdm',
      username: 'tstUser',
      token: 'tstToken',
      telefone: 'tstTel',
      role: 'ADMIN'
    };

    service.loadById(adminId).subscribe((response) => {
      expect(response).toEqual(mockAdmin);
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/api/administrador/${adminId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockAdmin);
  });

});
