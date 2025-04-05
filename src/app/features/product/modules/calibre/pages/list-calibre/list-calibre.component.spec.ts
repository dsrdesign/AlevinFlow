import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCalibreComponent } from './list-calibre.component';

describe('ListCalibreComponent', () => {
  let component: ListCalibreComponent;
  let fixture: ComponentFixture<ListCalibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCalibreComponent]
    });
    fixture = TestBed.createComponent(ListCalibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
