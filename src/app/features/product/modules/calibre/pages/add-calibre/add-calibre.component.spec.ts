import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalibreComponent } from './add-calibre.component';

describe('AddCalibreComponent', () => {
  let component: AddCalibreComponent;
  let fixture: ComponentFixture<AddCalibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCalibreComponent]
    });
    fixture = TestBed.createComponent(AddCalibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
