import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2 class="text-success">text-success css class</h2>
    <h2 [class]="successClass">text-success css class</h2>
    <h2 class="text-success text-special">text-success and text-special css classes</h2>
    <h2 [class.text-danger]="hasError">text-danger css class based on true or false</h2>

    <h2 [ngClass]="messageClasses">multiple classes from messageClasses object binded by ngClass directive</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic; 
    }
  `]
})
export class TestComponent implements OnInit {

  public name = 'Dariusz';
  public successClass = 'text-success';
  public specialClass = 'text-special';

  public hasError = true;
  public isSpecial = true;

  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
