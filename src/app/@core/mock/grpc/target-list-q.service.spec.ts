import { TestBed } from '@angular/core/testing';

import { TargetListQService } from './target-list-q.service';

describe('TargetListQService', () => {
  let service: TargetListQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TargetListQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
