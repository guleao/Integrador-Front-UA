import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConcluirComponent } from './dialog-concluir.component';

describe('DialogConcluirComponent', () => {
  let component: DialogConcluirComponent;
  let fixture: ComponentFixture<DialogConcluirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConcluirComponent]
    });
    fixture = TestBed.createComponent(DialogConcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
