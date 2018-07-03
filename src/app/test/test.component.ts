import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
    <input [disabled]="isDisabled" [id]="myId" type="text" value="Paul">
    <input [disabled]="isNotDisabled" [class]="myClass" type="text" value="Paul">
    
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Dariusz';
  public myId = 'testId';
  public myClass = 'testClass';
  public isDisabled = true;
  public isNotDisabled = false;

  constructor() { }

  ngOnInit() {
  }

}
