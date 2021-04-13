import { TestBed } from '@angular/core/testing';

import { BackDevicesService } from './back-devices.service';

describe('BackDevicesService', () => {
  let service: BackDevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackDevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
