import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  link(direction:string){
    location.href=direction;
  }

  public title = 'Full Stack Developer';
  public subtitle = 'Programador de sitios Web';
}
