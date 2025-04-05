import { TestBed } from '@angular/core/testing';

import { FecondationService } from './fecondation.service';

describe('FecondationService', () => {
  let service: FecondationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FecondationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
