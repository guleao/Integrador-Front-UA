import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAtividadedetailsComponent } from './cadastro-atividadedetails.component';

describe('CadastroAtividadedetailsComponent', () => {
  let component: CadastroAtividadedetailsComponent;
  let fixture: ComponentFixture<CadastroAtividadedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAtividadedetailsComponent]
    });
    fixture = TestBed.createComponent(CadastroAtividadedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
