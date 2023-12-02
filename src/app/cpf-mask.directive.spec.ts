import { CpfMaskDirective } from './cpf-mask.directive';
import { ElementRef } from '@angular/core';

describe('CpfMaskDirective', () => {
  it('should create an instance', () => {
    const elMock: ElementRef = {
      nativeElement: document.createElement('div')
    };

    const directive = new CpfMaskDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
