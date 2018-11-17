import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCouponUpToGivenEndDateComponent } from './get-coupon-up-to-given-end-date.component';

describe('GetCouponUpToGivenEndDateComponent', () => {
  let component: GetCouponUpToGivenEndDateComponent;
  let fixture: ComponentFixture<GetCouponUpToGivenEndDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCouponUpToGivenEndDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCouponUpToGivenEndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
