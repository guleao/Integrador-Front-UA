import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PessoaService } from './pessoa.service';

describe('PessoaService', () => {
  let service: PessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PessoaService], 
    });
    service = TestBed.inject(PessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
