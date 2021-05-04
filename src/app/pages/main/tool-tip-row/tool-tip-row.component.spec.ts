import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTipRowComponent } from './tool-tip-row.component';

describe('ToolTipRowComponent', () => {
  let component: ToolTipRowComponent;
  let fixture: ComponentFixture<ToolTipRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolTipRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTipRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
