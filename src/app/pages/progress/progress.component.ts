import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  porciento: number = 50;
  constructor() { }

  ngOnInit() {
  }

  cambiarPorciento(valor){
    if(this.porciento >= 100 && valor >0){
      this.porciento =100;
      return;
    };
  
    if (this.porciento <=0 && valor <0) {
      this.porciento = 0;
      return;  
    }
    
  this.porciento = this.porciento + valor;
  }
}
