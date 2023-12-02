import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Viacep } from './viacep';
import { HttpClientModule } from '@angular/common/http'; 

describe('Viacep', () => {
  let service: Viacep;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule], 
      providers: [Viacep], 
    });
    service = TestBed.inject(Viacep);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
