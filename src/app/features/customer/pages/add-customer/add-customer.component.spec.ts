import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerComponent } from './add-customer.component';
import { AddcustomerComponent } from 'src/app/inventual/supplier/addcustomer/addcustomer.component';

describe('AddCustomerComponent', () => {
  let component: AddCustomerComponent;
  let fixture: ComponentFixture<AddCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
