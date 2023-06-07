import { Component, HostListener } from '@angular/core';
import { ScrollToolsService } from '../tools/scroll-tools.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(){
  }

  @HostListener("document:scroll") scrollFunction():any{
    var elementRef = document.getElementById('contact');
    var element = document.getElementById('contact-content');
    if(elementRef != null && element != null){
      let distance = elementRef.getBoundingClientRect();
      if( distance.top + 100 < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0){
        element.style.display = 'flex';
      }
    }
}

}
