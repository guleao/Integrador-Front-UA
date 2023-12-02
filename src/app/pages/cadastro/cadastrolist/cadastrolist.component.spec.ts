import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrolistComponent } from './cadastrolist.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CadastrolistComponent', () => {
  let component: CadastrolistComponent;
  let fixture: ComponentFixture<CadastrolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrolistComponent],
      imports: [HttpClientTestingModule, MatDialogModule, MatIconModule, MatMenuModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'someId'
              }
            }
          }
        }
      ]
    });
    fixture = TestBed.createComponent(CadastrolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
