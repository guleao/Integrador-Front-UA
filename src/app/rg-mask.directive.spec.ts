import { RgMaskDirective } from './rg-mask.directive';
import { ElementRef } from '@angular/core';

describe('RgMaskDirective', () => {
  it('should create an instance', () => {
    // Criar um objeto fake ElementRef para passar como argumento
    const elMock: ElementRef = {
      nativeElement: document.createElement('div')
    };

    const directive = new RgMaskDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
