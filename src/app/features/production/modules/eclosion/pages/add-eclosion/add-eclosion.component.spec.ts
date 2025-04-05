import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEclosionComponent } from './add-eclosion.component';

describe('AddEclosionComponent', () => {
  let component: AddEclosionComponent;
  let fixture: ComponentFixture<AddEclosionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEclosionComponent]
    });
    fixture = TestBed.createComponent(AddEclosionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
