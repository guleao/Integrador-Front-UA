import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Viacep } from './viacep';

describe('Viacep', () => {
  let service: Viacep;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Viacep],
    });

    service = TestBed.inject(Viacep);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('teste metodo get', () => {
    const mockCepData = {
      cep: '12345678',
      logradouro: 'Test Street',
      complemento: 'Test Complement',
      bairro: 'Test Neighborhood',
      localidade: 'Test City',
      uf: 'TS',
      ibge: '123456',
      gia: '7890123',
      ddd: '99',
      siafi: '987654',
    };

    const cepToTest = '12345678';

    service.getCepData(cepToTest).subscribe((response: any) => {
      expect(response).toEqual(mockCepData);
    });

    const req = httpTestingController.expectOne(`https://viacep.com.br/ws/${cepToTest}/json/`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockCepData);
  });
});
