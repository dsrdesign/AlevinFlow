import { TestBed } from '@angular/core/testing';

import { CalibreService } from './calibre.service';

describe('CalibreService', () => {
  let service: CalibreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalibreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
