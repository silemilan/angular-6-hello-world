import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome Dariusz</h2>
    <h2>Welcome {{name1}}</h2>
    <h2>{{'Welcome ' + name2}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{name1.toUpperCase()}}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name1 = 'John';
  public name2 = 'Paul';

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name1;
  }

}
