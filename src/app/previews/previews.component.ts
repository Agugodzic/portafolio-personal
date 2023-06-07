import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-previews',
  templateUrl: './previews.component.html',
  styleUrls: ['./previews.component.scss']
})
export class PreviewsComponent implements OnInit {
  @Input() previews:string[] = [];
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public previewSelected:string  = "";

  public changePreview(url:string){
    this.previewSelected = url;
  }

  public borderStyle(url:string):any{
    let style;
    if(url == this.previewSelected){
      style = {
        "border-style":"solid",
        "border-color":"yellow",
        "border-width":"2px"
      };
    }else{
      style = {
        "border-style":"none"
      };
    }
    return style
  }

  public close(){
    this.closeEvent.emit(false);
  }

  ngOnInit():void{
    if(this.previewSelected != undefined){
      this.previewSelected = this.previews[0];
    }
  }
}
