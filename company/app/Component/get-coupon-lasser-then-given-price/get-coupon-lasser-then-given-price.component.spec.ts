import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCouponLasserThenGivenPriceComponent } from './get-coupon-lasser-then-given-price.component';

describe('GetCouponLasserThenGivenPriceComponent', () => {
  let component: GetCouponLasserThenGivenPriceComponent;
  let fixture: ComponentFixture<GetCouponLasserThenGivenPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCouponLasserThenGivenPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCouponLasserThenGivenPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
