import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasListDialogComponent } from './pessoas-list-dialog.component';

describe('PessoasListDialogComponent', () => {
  let component: PessoasListDialogComponent;
  let fixture: ComponentFixture<PessoasListDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasListDialogComponent]
    });
    fixture = TestBed.createComponent(PessoasListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
