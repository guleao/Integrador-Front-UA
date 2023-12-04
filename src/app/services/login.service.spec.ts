import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { Login } from '../models/login';
import { Admin } from '../models/admin';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtPayload, jwtDecode } from 'jwt-decode';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('teste de login bem sucedido', () => {
    const mockLogin: Login = { username: 'test@example.com', password: 'password' };
    const mockAdmin: Admin = { id: 1, nomeAdm: 'testAdmin', username: 'testUser', token: 'testToken', telefone: 'testTel', role: 'ADMIN' };

    service.logar(mockLogin).subscribe((response) => {
      expect(response).toEqual(mockAdmin);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/login');
    expect(req.request.method).toEqual('POST');
    req.flush(mockAdmin);
  });

  it('teste de login error', () => {
    const mockLogin: Login = { username: 'test@example.com', password: 'password' };
    const errorMessage = 'Invalid credentials';
  
    service.logar(mockLogin).subscribe(
      () => fail('should have failed with an error'),
      (error: HttpErrorResponse) => {
        expect(error.error.errorMessage).toEqual(errorMessage);
      }
    );
  
    const req = httpTestingController.expectOne('http://localhost:8080/login');
    expect(req.request.method).toEqual('POST');
    req.flush({ errorMessage }, { status: 401, statusText: 'Unauthorized' });
  });
  

it('teste metodo deslogar', () => {
  service.deslogar().subscribe((response) => {
    expect(response).toBeTruthy(); 
  });

  const req = httpTestingController.expectOne('http://localhost:8080/login/deslogar');
  expect(req.request.method).toEqual('GET');
  req.flush({});
});


it('teste deslogar error', () => {
  const errorMessage = 'Logout failed';

  service.deslogar().subscribe(
    () => fail('should have failed with an error'),
    (error) => {
      expect(error instanceof HttpErrorResponse).toBe(true);
      expect(error.status).toBe(500);
      expect(error.statusText).toBe('Internal Server Error');
      expect(error.url).toBe('http://localhost:8080/login/deslogar');
      expect(error.error).toBe(errorMessage);
    }
  );

  const req = httpTestingController.expectOne('http://localhost:8080/login/deslogar');
  expect(req.request.method).toEqual('GET');
  req.flush(errorMessage, { status: 500, statusText: 'Internal Server Error' }); 
});



it('teste metodo remover token', () => {
  const mockToken = 'testToken';

  service.addToken(mockToken);
  expect(service.getToken()).toEqual(mockToken);

  service.removerToken();
  expect(service.getToken()).toBeNull();
});

it('teste para ver se o usuario tem permissoes', () => {
  const mockToken = 'mockToken';
  spyOn(service, 'getToken').and.returnValue(mockToken);

  spyOn(service, 'jwtDecode').and.returnValue({ role: 'ADMIN' } as JwtPayload);

  expect(service.hasPermission('ADMIN')).toBeTruthy();
  expect(service.hasPermission('USER')).toBeFalsy();
});
});
