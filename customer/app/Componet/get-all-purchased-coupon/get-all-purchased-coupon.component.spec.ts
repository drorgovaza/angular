import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPurchasedCouponComponent } from './get-all-purchased-coupon.component';

describe('GetAllPurchasedCouponComponent', () => {
  let component: GetAllPurchasedCouponComponent;
  let fixture: ComponentFixture<GetAllPurchasedCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllPurchasedCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPurchasedCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
