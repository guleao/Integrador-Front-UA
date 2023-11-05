import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    const input = event.target;
    const value = input.value.replace(/\D/g, '');

    if (value.length <= 10) {
      // Aplica a máscara para números de telefone sem DDD
      input.value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      // Aplica a máscara para números de telefone com DDD
      input.value = value.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/, '($1) $2 $3-$4');
    }
  }

}
