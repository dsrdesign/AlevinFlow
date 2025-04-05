import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnutritionComponent } from './listnutrition.component';

describe('ListnutritionComponent', () => {
  let component: ListnutritionComponent;
  let fixture: ComponentFixture<ListnutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
