// import { Component, OnInit, Input, EventEmitter, Output, NgModule } from '@angular/core';

// @Component({
//   selector: 'button-view',
//   template: `
//       <i class="fa fa-question-circle" style="position: absolute; top: 0.2em; right: 0.2em;"
//         *ngIf="hasPopover"
//         [ngbPopover]="popContent"
//         popoverTitle="{{ value }} content:"
//         triggers="{{ popoverTriggers }}"
//         container="body"
//       >
//       </i>
//   `,
// })


// export class ToolTipRowComponent implements OnInit {
//   renderValue: string;
//   hasPopover = true;

//   @Input() value: string | number;
//   @Input() rowData: any;

//   @Output() save: EventEmitter<any> = new EventEmitter();

//   ngOnInit() {
//     this.renderValue = this.value.toString().toUpperCase();
//   }

//   onClick() {
//     this.save.emit(this.rowData);
//   }
// }

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'button-view',
  template: `
    <button nbButton *ngIf="renderValue == 'FALSE'" status="danger" (click)="onClick()">{{ renderValue }}</button>
    <button nbButton *ngIf="renderValue == 'TRUE'" status="success" (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ToolTipRowComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}