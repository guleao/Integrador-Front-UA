import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoasListDialogComponent } from './pessoas-list-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'; // Importe o MatDialogModule

describe('PessoasListDialogComponent', () => {
  let component: PessoasListDialogComponent;
  let fixture: ComponentFixture<PessoasListDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasListDialogComponent],
      imports: [MatDialogModule] // Adicione o MatDialogModule nos imports
    });
    fixture = TestBed.createComponent(PessoasListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
