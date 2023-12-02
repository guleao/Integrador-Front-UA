import { TestBed } from '@angular/core/testing';
import { AtividadeService } from './atividade.service';
import { HttpClientModule } from '@angular/common/http'; 

describe('AtividadeService', () => {
  let service: AtividadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(AtividadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
