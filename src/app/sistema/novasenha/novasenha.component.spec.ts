import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovasenhaComponent } from './novasenha.component';

describe('NovasenhaComponent', () => {
  let component: NovasenhaComponent;
  let fixture: ComponentFixture<NovasenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovasenhaComponent]
    });
    fixture = TestBed.createComponent(NovasenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
