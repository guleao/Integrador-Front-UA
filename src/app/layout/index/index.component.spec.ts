import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexComponent } from './index.component';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../footer/footer.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponent, HeaderComponent, FooterComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
