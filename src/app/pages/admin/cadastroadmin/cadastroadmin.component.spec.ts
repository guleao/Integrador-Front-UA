import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroadminComponent } from './cadastroadmin.component';

describe('CadastroadminComponent', () => {
  let component: CadastroadminComponent;
  let fixture: ComponentFixture<CadastroadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroadminComponent]
    });
    fixture = TestBed.createComponent(CadastroadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
