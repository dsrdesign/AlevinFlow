import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcalibrageComponent } from './addcalibrage.component';

describe('AddcalibrageComponent', () => {
  let component: AddcalibrageComponent;
  let fixture: ComponentFixture<AddcalibrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcalibrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcalibrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});