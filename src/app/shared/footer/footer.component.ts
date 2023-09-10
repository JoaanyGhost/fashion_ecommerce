import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faShareNodes = faShareNodes;
  faCommentDots = faCommentDots


}
