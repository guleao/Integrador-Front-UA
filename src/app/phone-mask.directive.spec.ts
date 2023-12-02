import { PhoneMaskDirective } from './phone-mask.directive';
import { ElementRef } from '@angular/core';

describe('PhoneMaskDirective', () => {
  it('should create an instance', () => {
    // Criar um objeto fake ElementRef para passar como argumento
    const elMock: ElementRef = {
      nativeElement: document.createElement('div')
    };

    const directive = new PhoneMaskDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
