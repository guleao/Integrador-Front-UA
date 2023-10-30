import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  showMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile?.classList.contains('open')) {
      menuMobile.classList.remove('open');
    } else {
      menuMobile?.classList.add('open');
    }
  }

  showMenuProfile() {
    let menuProfile = document.querySelector('.menu-profile');
    if (menuProfile?.classList.contains('open2')) {
      menuProfile.classList.remove('open2');
    }
    alert("teste")
  }
}
