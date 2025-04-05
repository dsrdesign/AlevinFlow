import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcalibrageComponent } from './listcalibrage.component';

describe('ListcalibrageComponent', () => {
  let component: ListcalibrageComponent;
  let fixture: ComponentFixture<ListcalibrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcalibrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcalibrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
