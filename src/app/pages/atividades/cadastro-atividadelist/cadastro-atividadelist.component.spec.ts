import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAtividadelistComponent } from './cadastro-atividadelist.component';

describe('CadastroAtividadelistComponent', () => {
  let component: CadastroAtividadelistComponent;
  let fixture: ComponentFixture<CadastroAtividadelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAtividadelistComponent]
    });
    fixture = TestBed.createComponent(CadastroAtividadelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
