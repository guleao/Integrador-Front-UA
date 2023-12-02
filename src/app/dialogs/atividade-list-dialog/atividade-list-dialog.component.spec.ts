import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtividadeListDialogComponent } from './atividade-list-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

describe('AtividadeListDialogComponent', () => {
  let component: AtividadeListDialogComponent;
  let fixture: ComponentFixture<AtividadeListDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtividadeListDialogComponent],
      imports: [MatDialogModule, MatButtonModule] 
    });
    fixture = TestBed.createComponent(AtividadeListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
