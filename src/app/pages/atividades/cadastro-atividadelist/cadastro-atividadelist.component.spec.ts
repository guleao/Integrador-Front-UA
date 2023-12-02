import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroAtividadelistComponent } from './cadastro-atividadelist.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

describe('CadastroAtividadelistComponent', () => {
  let component: CadastroAtividadelistComponent;
  let fixture: ComponentFixture<CadastroAtividadelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAtividadelistComponent],
      imports: [HttpClientTestingModule, MatDialogModule, MatMenuModule], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({}),
            },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(CadastroAtividadelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
