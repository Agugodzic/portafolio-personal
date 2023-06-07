import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToolsService {

  constructor() { }

  appairWithScroll(displayElement:string,referenceElement:string):any{
    var ReferenceElement = document.getElementById(referenceElement);
    var DisplayElement = document.getElementById(displayElement);

    if(ReferenceElement != null && DisplayElement != null){
      let distance = ReferenceElement.getBoundingClientRect();
      if( distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0){
        DisplayElement.style.display = 'flex';
      }
    }
  }
  /*
    // HOW TO USE whrite in the component class:

    @HostListener("document:scroll") scrollFunction(){
    this.scrollTools.appairWithScroll('arg1','arg2');
    }

    // arg1: id of the html element in the same location as the element to display
    // arg2: element to render when appearing in viewport, this have a display : none.

  }
  */



}
