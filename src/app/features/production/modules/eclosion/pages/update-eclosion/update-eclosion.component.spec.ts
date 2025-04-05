import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEclosionComponent } from './update-eclosion.component';

describe('UpdateEclosionComponent', () => {
  let component: UpdateEclosionComponent;
  let fixture: ComponentFixture<UpdateEclosionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEclosionComponent]
    });
    fixture = TestBed.createComponent(UpdateEclosionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
