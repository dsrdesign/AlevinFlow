import { TestBed } from '@angular/core/testing';

import { CalibrageService } from './calibrage.service';

describe('CalibrageService', () => {
  let service: CalibrageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalibrageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
