import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CadastroadminComponent } from './cadastroadmin.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';
import { FormsModule } from '@angular/forms';

describe('CadastroadminComponent', () => {
  let component: CadastroadminComponent;
  let fixture: ComponentFixture<CadastroadminComponent>;
  let mockAdminService: jasmine.SpyObj<AdminService>;
  let mockRouter: jasmine.SpyObj<Router>;


  let httpTestingController: HttpTestingController;
  let adminService: AdminService;
  beforeEach(() => {
    mockAdminService = jasmine.createSpyObj('AdminService', ['save', 'update']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [CadastroadminComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: { admin: new Admin() } } }
        },
        { provide: AdminService, useValue: mockAdminService },
        { provide: Router, useValue: mockRouter }
      ]
    });

    fixture = TestBed.createComponent(CadastroadminComponent);
    component = fixture.componentInstance;
  });


  beforeEach(() => {
    adminService = TestBed.inject(AdminService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('chamada do método save', fakeAsync(() => {
    spyOn(window, 'alert');
    const admin: Admin = new Admin();
    component.admin = admin;

    mockAdminService.save.and.returnValue(of(admin));

    component.save();
    tick();

    expect(mockAdminService.save).toHaveBeenCalledWith(admin);
    expect(window.alert).toHaveBeenCalledWith('Registrado com sucesso');
  }));

  it('chamada do método update', fakeAsync(() => {
    spyOn(window, 'alert');
    const admin: Admin = { id: 1, nomeAdm: 'Admin', username: 'admin@example.com', token: 'password', telefone: '123456789', role: 'ADMIN' };
    component.admin = admin;

    mockAdminService.update.and.returnValue(of(admin));

    component.save();
    tick();

    expect(mockAdminService.update).toHaveBeenCalledWith(admin);
    expect(window.alert).toHaveBeenCalledWith('Atualizado com sucesso');
  }));


  it('chamada do evento OnEdit', () => {
    const admin: Admin = { id: 1, nomeAdm: 'Admin', username: 'admin@example.com', token: 'password', telefone: '123456789', role: 'ADMIN' };
    spyOn(component.edit, 'emit');

    component.onEdit(admin);

    expect(component.edit.emit).toHaveBeenCalledWith(admin);
  });




});
