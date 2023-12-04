import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

import { rotaguardGuard } from './rotaguard.guard';
import { LoginService } from '../services/login.service';

describe('rotaguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rotaguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
