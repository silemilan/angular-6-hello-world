import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">Text displayed by *ngSwitchCase="'red'"</div>
      <div *ngSwitchCase="'blue'">Text displayed by *ngSwitchCase="'blue'"</div>
      <div *ngSwitchCase="'green'">Text displayed by *ngSwitchCase="'green'"</div>
      <div *ngSwitchDefault>Text displayed by *ngSwitchDefault</div>
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public color = "red";

  constructor() { }

  ngOnInit() {
  }


}
