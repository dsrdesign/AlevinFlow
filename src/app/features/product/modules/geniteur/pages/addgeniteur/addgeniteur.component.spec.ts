import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgeniteurComponent } from './addgeniteur.component';

describe('AddgeniteurComponent', () => {
  let component: AddgeniteurComponent;
  let fixture: ComponentFixture<AddgeniteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgeniteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgeniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

