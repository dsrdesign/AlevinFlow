import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEclosionComponent } from './detail-eclosion.component';

describe('DetailEclosionComponent', () => {
  let component: DetailEclosionComponent;
  let fixture: ComponentFixture<DetailEclosionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEclosionComponent]
    });
    fixture = TestBed.createComponent(DetailEclosionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
