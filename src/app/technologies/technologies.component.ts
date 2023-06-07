import { Component, HostListener, OnInit} from '@angular/core';
import { TechnologiesService } from '../services/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent  implements OnInit{
  constructor( private techSercvice:TechnologiesService){
  }

  public technologies = this.techSercvice.techList;
  public page:number = 1;
  public technologiesInView = this.technologies.slice( (this.page - 1) * 6 , this.page * 6);
  public pageButtons = this.pageButtonsGenerator();

  public changePage(numberPage:number):void{
    //alert("pagina:" + this.page + " ir a: " + numberPage +" reconoce: " + Math.ceil(this.technologies.length / 6 ) + "paginas")
    this.page = numberPage;
    this.technologiesInView = this.technologies.slice( (this.page - 1) * 6 , this.page * 6);
    this.pageButtons = this.pageButtonsGenerator();
  }

  public pageButtonsGenerator():any{
    let buttons = [];
    let pagesCount = Math.ceil(this.technologies.length / 6 );
    for(let i = 1; i <= pagesCount ; i++){
      if(i == this.page){
        buttons.push({
          number:i,
          selected:true
        })
      }else{
          buttons.push({
            number:i,
            selected:false
          })
        };
      }
      return buttons;
    }

  @HostListener("document:scroll") scrollFunction():any{
      var elementRef = document.getElementById('tecnologias');
      var element = document.getElementById('technologies-container');
      if(elementRef != null && element != null){
        let distance = elementRef.getBoundingClientRect();
        if( distance.top + 100 < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0){
          element.style.display = 'flex';
        }
      }
  }

  ngOnInit(): void {
    this.pageButtons = this.pageButtonsGenerator() ;
  }
}

