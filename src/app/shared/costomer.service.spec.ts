import { TestBed } from '@angular/core/testing';

import { CostomerService } from './costomer.service';

describe('CostomerService', () => {
  let service: CostomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
