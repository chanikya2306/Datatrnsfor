import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'datatransformation';
  message_parent:any = "This message being sent from parent";
  recivedata:any;
  showMessage:any = true;
  constructor(){ }

  ngOnInit(): void {
    
  }
  reciveMessage(event:any){
    this.recivedata = event
  }
}
