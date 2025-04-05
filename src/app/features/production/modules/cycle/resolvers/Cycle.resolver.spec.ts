import { TestBed } from '@angular/core/testing';

import { CycleResolver } from './Cycle.resolver';

describe('InternResolver', () => {
  let resolver: CycleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CycleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
