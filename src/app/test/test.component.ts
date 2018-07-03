import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
    <h3>{{valueToDisplay}}</h3>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = 'Dariusz';
  public valueToDisplay = '';

  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    this.valueToDisplay = value;
  }
}
