import { TestBed } from '@angular/core/testing';

import { GeniteurService } from './geniteur.service';

describe('GeniteurService', () => {
  let service: GeniteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeniteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
