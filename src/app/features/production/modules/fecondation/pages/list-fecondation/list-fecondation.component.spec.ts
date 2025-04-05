import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFecondationComponent } from './list-fecondation.component';

describe('ListFecondationComponent', () => {
  let component: ListFecondationComponent;
  let fixture: ComponentFixture<ListFecondationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFecondationComponent]
    });
    fixture = TestBed.createComponent(ListFecondationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
