import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroAtividadedetailsComponent } from './cadastro-atividadedetails.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('CadastroAtividadedetailsComponent', () => {
  let component: CadastroAtividadedetailsComponent;
  let fixture: ComponentFixture<CadastroAtividadedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAtividadedetailsComponent],
      imports: [HttpClientTestingModule, MatDialogModule], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({}),
              data: {
                atividade: {} 
              }
            }
          }
        }
      ]
    });
    fixture = TestBed.createComponent(CadastroAtividadedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
