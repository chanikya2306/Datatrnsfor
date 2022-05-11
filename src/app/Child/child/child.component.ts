import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() message:any;
  @Output() messageEvent = new EventEmitter<any>();
  data:any = "This Message passing from child to parent"
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageEvent.emit(this.data)
  }
}
