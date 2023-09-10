import { faEye, faEyeSlash, faPaperPlane, faCreditCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMoneyBill, faMapLocationDot, faPhone, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  faEye = faEye
  faEyeSlash = faEyeSlash;
  faCartShopping = faCartShopping;
  faPaperPlane = faPaperPlane;
  faCreditCard = faCreditCard;
  faMoneyBill = faMoneyBill;
  faEnvelope = faEnvelope;
  faMapLocationDot = faMapLocationDot;
  faPhone = faPhone;
  faArrowUp = faArrowUp;

  isBackTopScrolled = false;
  scrollOffset = 100;

  private reset_close: HTMLElement | null = null;
  private reset: HTMLElement | null = null;

  ngOnInit(): void {
    this.reset_close = document.querySelector('.reset-close');
    this.reset = document.querySelector('.reset');


    if (this.reset) {
      this.reset.classList.add('active');
    }

  }



  /* ACTIVADOR LEFT, MIDDLE O RIGHT */

  switchBanner(name: string){
    const banner = document.querySelector('#banner');
    if(!banner?.classList.contains(name)){

      banner !== null ? banner.className = 'banner' : null;
      banner?.classList.add(name);

      // if (this.reset_close && this.reset) {
      //   this.reset.classList.add('active');
      //   this.reset_close.classList.remove('active');
      // }


    }
    return;
  }



  /* BOTON DE CIERRE */

  closeBanner(){
    const banner = document.querySelector('#banner');
    banner !== null ? banner.className = 'banner' : null;


    // if (this.reset_close && this.reset) {
    //   this.reset.classList.remove('active');
    //   this.reset_close.classList.add('active');
    // }


  }





  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > this.scrollOffset) {
      this.isBackTopScrolled = true;
    } else {
      this.isBackTopScrolled = false;
    }
  }


  scrollTop(){
    window.scrollTo(0, 0);
  }

}
