import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrodetailsComponent } from './cadastrodetails.component';

describe('CadastrodetailsComponent', () => {
  let component: CadastrodetailsComponent;
  let fixture: ComponentFixture<CadastrodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrodetailsComponent]
    });
    fixture = TestBed.createComponent(CadastrodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
