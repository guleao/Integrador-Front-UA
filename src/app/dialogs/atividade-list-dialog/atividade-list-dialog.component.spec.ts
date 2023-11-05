import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeListDialogComponent } from './atividade-list-dialog.component';

describe('AtividadeListDialogComponent', () => {
  let component: AtividadeListDialogComponent;
  let fixture: ComponentFixture<AtividadeListDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtividadeListDialogComponent]
    });
    fixture = TestBed.createComponent(AtividadeListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
