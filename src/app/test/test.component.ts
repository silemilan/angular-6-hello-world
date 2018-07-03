import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input [(ngModel)]="name" type="text">
    <h3>{{name}}</h3>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = '';

  constructor() { }

  ngOnInit() {
  }


}
