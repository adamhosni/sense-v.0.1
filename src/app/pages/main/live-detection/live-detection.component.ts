import { Component } from '@angular/core';

@Component({
  selector: 'ngx-live-detection-card',
  styleUrls: ['./live-detection.component.scss'],
  templateUrl: './live-detection.component.html',
})
export class LiveDetectionComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
