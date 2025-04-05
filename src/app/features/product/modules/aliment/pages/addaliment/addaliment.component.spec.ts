import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalimentComponent } from './addaliment.component';

describe('AddalimentComponent', () => {
  let component: AddalimentComponent;
  let fixture: ComponentFixture<AddalimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddalimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddalimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
