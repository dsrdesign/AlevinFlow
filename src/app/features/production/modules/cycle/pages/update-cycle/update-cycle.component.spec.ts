import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCycleComponent } from './update-cycle.component';

describe('UpdateCycleComponent', () => {
  let component: UpdateCycleComponent;
  let fixture: ComponentFixture<UpdateCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCycleComponent]
    });
    fixture = TestBed.createComponent(UpdateCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
