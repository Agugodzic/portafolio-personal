import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , AfterViewInit{
  title = 'portafolio-personal';
  @ViewChild('tech') tech:any;


  ngAfterViewInit(){
    let techElement = this.tech.nativeElement;
    techElement.style.display = 'none';

  }
  ngOnInit(){
  }
}
