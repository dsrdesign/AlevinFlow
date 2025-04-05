import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFecondationComponent } from './add-fecondation.component';

describe('AddFecondationComponent', () => {
  let component: AddFecondationComponent;
  let fixture: ComponentFixture<AddFecondationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFecondationComponent]
    });
    fixture = TestBed.createComponent(AddFecondationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
