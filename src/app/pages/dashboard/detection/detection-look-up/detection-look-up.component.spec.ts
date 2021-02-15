import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionLookUpComponent } from './detection-look-up.component';

describe('DetectionLookUpComponent', () => {
  let component: DetectionLookUpComponent;
  let fixture: ComponentFixture<DetectionLookUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectionLookUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionLookUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
