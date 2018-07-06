import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngFor="let item of items; index as i">
      <h2>{{i}} {{item}}</h2>
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public items = ['Item A', 'Item B', 'Item C', 'Item D'];

  constructor() { }

  ngOnInit() {
  }


}
