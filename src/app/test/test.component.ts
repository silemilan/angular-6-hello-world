import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf="true"> Text displayed by ngIf Directive </h2>
    <h2 *ngIf="false"> Text hidden by ngIf Directive </h2>
    <h2 *ngIf="displayName"> Text displayed by ngIf Directive </h2>

    <h2 *ngIf="displayName2; else elseBlock"> Text hidden by ngIf Directive </h2>
    <ng-template #elseBlock>
      <h2> Another text displayed by ngIf Directive with else statement</h2>
    </ng-template>


    <h2 *ngIf="displayName3; then thenBlock; else elseBlock2"></h2>

    <ng-template #thenBlock>
      <h2> Another text displayed by ngIf Directive with then/else statements</h2>
    </ng-template>

    <ng-template #elseBlock2>
      <h2> Text hidden by ngIf Directive</h2>
    </ng-template>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  displayName = true;
  displayName2 = false;
  displayName3 = true;

  constructor() { }

  ngOnInit() {
  }


}
