import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCancelarComponent } from './dialog-cancelar.component';

describe('DialogCancelarComponent', () => {
  let component: DialogCancelarComponent;
  let fixture: ComponentFixture<DialogCancelarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCancelarComponent]
    });
    fixture = TestBed.createComponent(DialogCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
