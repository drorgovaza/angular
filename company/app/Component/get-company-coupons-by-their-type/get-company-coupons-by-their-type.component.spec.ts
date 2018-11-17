import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompanyCouponsByTheirTypeComponent } from './get-company-coupons-by-their-type.component';

describe('GetCompanyCouponsByTheirTypeComponent', () => {
  let component: GetCompanyCouponsByTheirTypeComponent;
  let fixture: ComponentFixture<GetCompanyCouponsByTheirTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCompanyCouponsByTheirTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCompanyCouponsByTheirTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
