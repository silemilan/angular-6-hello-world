import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2 [style.color]="'red'" >Style binding 1</h2>
    <h2 [style.color]="'#ff0000'" >Style binding 2</h2>
    <h2 [style.color]="highlightColor" >Style binding 3</h2>
    <h2 [style.color]="hasError ? 'green' : 'blue'" >Style binding 4</h2>
    <h2 [ngStyle]="titleStyles" >Style binding 5</h2>
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
  public highlightColor = 'orange';

  public hasError = true;
  public isSpecial = true;

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }

  constructor() { }

  ngOnInit() {
  }

}
