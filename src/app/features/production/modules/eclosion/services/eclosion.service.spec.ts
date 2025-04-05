import { TestBed } from '@angular/core/testing';

import { EclosionService } from './eclosion.service';

describe('EclosionService', () => {
  let service: EclosionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EclosionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
