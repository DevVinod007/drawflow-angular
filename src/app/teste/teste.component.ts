import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {
  @Output() showpopup = new EventEmitter<any>();
  @Output() closemodal = new EventEmitter<any>();

  constructor() {}


  showpopupChild(e: any) {

    console.log('click')
    this.showpopup.emit(e);
  }

  closemodalChild(e: any) {
    this.closemodal.emit(e);
  }
}
