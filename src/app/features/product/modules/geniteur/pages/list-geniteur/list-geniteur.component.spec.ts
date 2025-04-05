import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGeniteurComponent } from './list-geniteur.component';

describe('ListGeniteurComponent', () => {
  let component: ListGeniteurComponent;
  let fixture: ComponentFixture<ListGeniteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGeniteurComponent]
    });
    fixture = TestBed.createComponent(ListGeniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
