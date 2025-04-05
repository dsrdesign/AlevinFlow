import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEclosionComponent } from './list-eclosion.component';

describe('ListEclosionComponent', () => {
  let component: ListEclosionComponent;
  let fixture: ComponentFixture<ListEclosionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEclosionComponent]
    });
    fixture = TestBed.createComponent(ListEclosionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
