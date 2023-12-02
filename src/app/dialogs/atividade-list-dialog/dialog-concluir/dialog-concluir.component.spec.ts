import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog'; 
import { DialogConcluirComponent } from './dialog-concluir.component';

describe('DialogConcluirComponent', () => {
  let component: DialogConcluirComponent;
  let fixture: ComponentFixture<DialogConcluirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConcluirComponent],
      imports: [MatDialogModule] 
    });
    fixture = TestBed.createComponent(DialogConcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
