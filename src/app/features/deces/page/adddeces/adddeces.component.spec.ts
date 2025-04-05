import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddecesComponent } from './adddeces.component';

describe('AdddecesComponent', () => {
  let component: AdddecesComponent;
  let fixture: ComponentFixture<AdddecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});