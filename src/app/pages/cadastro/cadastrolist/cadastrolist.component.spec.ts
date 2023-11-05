import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrolistComponent } from './cadastrolist.component';

describe('CadastrolistComponent', () => {
  let component: CadastrolistComponent;
  let fixture: ComponentFixture<CadastrolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrolistComponent]
    });
    fixture = TestBed.createComponent(CadastrolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
