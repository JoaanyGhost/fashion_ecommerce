import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

import { faHome, faMagnifyingGlass, faBagShopping, faUser, faHeart, faBars} from '@fortawesome/free-solid-svg-icons';
//import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faHome = faHome;
  faSearch = faMagnifyingGlass;
  faPerson = faUser;
  faHeart = faHeart;
  faBagShopping = faBagShopping
  faBars = faBars;

  cantidadShopping = 0;

  activeMovil = false
  isHeaderScrolled = false;
  estadoMenu = false

  scrollOffset = 100;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > this.scrollOffset) {
      this.isHeaderScrolled = true;
    } else {
      this.isHeaderScrolled = false;
    }
  }

  scrollTop(){
    window.scrollTo(0, 0);
  }



  toggleMenu(){

    if(!this.estadoMenu){
      this.scrollTop;

      this.activeMovil = true
      this.estadoMenu = true
    }else{
      this.activeMovil = false
      this.estadoMenu = false
    }

  }
}
