import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexpenseComponent } from './listexpense.component';

describe('ListexpenseComponent', () => {
  let component: ListexpenseComponent;
  let fixture: ComponentFixture<ListexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListexpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})

