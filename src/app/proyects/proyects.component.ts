import { Component, HostListener } from '@angular/core';
import { ProyectsService } from '../services/proyects.service';
import { Proyect } from '../models/proyect.model';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent {

  constructor(private proyectService:ProyectsService){
  }

  public proyectList:Proyect[] = this.proyectService.proyectList;
  public page:number = 1;
  public proyectsInView:Proyect[] = this.proyectList.slice( (this.page - 1) * 3 , this.page * 3);
  public pageButtons = this.pageButtonsGenerator();
  public showPreviews:boolean = false;
  public selectedPreviews:string[] = this.proyectList[3].previews;

  public closePreviews(event:any):void{
    this.showPreviews = event;
  }

  public changePage(numberPage:number):void{
    this.page = numberPage;
    this.proyectsInView = this.proyectList.slice( (this.page - 1) * 3 , this.page * 3);
    this.pageButtons = this.pageButtonsGenerator();
  }

  public openUrl(url:string):void{
    window.open(url, '_blank');
  }

  public pageButtonsGenerator():any{
    let buttons = [];
    let pagesCount = Math.ceil(this.proyectList.length / 3 );
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

  public switchPreviews(previews:string[]):void{
    this.selectedPreviews = previews;
    this.showPreviews = !this.showPreviews;
  };

  @HostListener("document:scroll") scrollFunction():any{
    var elementRef = document.getElementById('proyects');
    var element = document.getElementById('proyects-content');
    if(elementRef != null && element != null){
      let distance = elementRef.getBoundingClientRect();
      if( distance.top + 100 < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0){
        element.style.display = 'flex';
      }
    }
}
}
