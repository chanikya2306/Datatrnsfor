import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'datatransformation';
  recivedata:any;
  showMessage:any = true;
  constructor(){ }

  ngOnInit(): void {
    
  }
  reciveMessage(event:any){
    this.recivedata = event
  }
}
