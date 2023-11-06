import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() {}


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
