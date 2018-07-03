import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
   <button (click)="onClickeventHandler()">Greet 1</button>
   <button (click)="onClickeventHandler2()">Greet 2</button>
   <h3>{{greet2}}</h3>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = 'Dariusz';
  public greet2 = "";


  constructor() { }

  ngOnInit() {
  }

  onClickeventHandler() {
    console.log('Test 1');
  }

  onClickeventHandler2() {
    if(this.greet2 === "") {
      this.greet2 = 'Hi there!';
    } else {
      this.greet2 = "";
    }
  }

}
