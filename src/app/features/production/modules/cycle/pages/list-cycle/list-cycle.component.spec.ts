import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCycleComponent } from './list-cycle.component';

describe('ListCycleComponent', () => {
  let component: ListCycleComponent;
  let fixture: ComponentFixture<ListCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCycleComponent]
    });
    fixture = TestBed.createComponent(ListCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
