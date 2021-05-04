import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="on = !on" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status paragraph-2">{{ value }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent implements AfterViewInit{

  @Input() title: string;
  @Input() type: string;
  @Input() value: string;
  @Input() on = true;


  ngAfterViewInit(){

    // if (this.value.includes('--')){
    //   this.on = false;
    // }
  }
}
