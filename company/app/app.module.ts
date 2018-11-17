import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCouponComponent } from './component/createcoupon/createcoupon.component';
import { RemoveCouponComponent } from './component/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './component/update-coupon/update-coupon.component';
import { GetCouponComponent } from './component/get-coupon/get-coupon.component';
import { GetAllCouponsComponent } from './component/get-all-coupons/get-all-coupons.component';
import { GetAllCompanyCouponsComponent } from './component/get-all-company-coupons/get-all-company-coupons.component';
import { GetCouponsByTypeComponent } from './component/get-coupons-by-type/get-coupons-by-type.component';
import { GetCompanyCouponsByTheirTypeComponent } from './component/get-company-coupons-by-their-type/get-company-coupons-by-their-type.component';
import { GetCouponLasserThenGivenPriceComponent } from './component/get-coupon-lasser-then-given-price/get-coupon-lasser-then-given-price.component';
import { GetAllCouponsUpUntillGiveDateComponent } from './component/get-coupon-up-to-given-end-date/get-coupon-up-to-given-end-date.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateCouponComponent,
    RemoveCouponComponent,
    UpdateCouponComponent,
    GetCouponComponent,
    GetAllCouponsComponent,
    GetAllCompanyCouponsComponent,
    GetCouponsByTypeComponent,
    GetCompanyCouponsByTheirTypeComponent,
    GetCouponLasserThenGivenPriceComponent,
    GetAllCouponsUpUntillGiveDateComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'createCoupon',
        component:CreateCouponComponent
      },
      {
        path: 'removeCoupon',
        component:RemoveCouponComponent
      },
      {
        path: 'updateCoupon',
        component:UpdateCouponComponent 
      },
      {
        path: 'getCoupon',
        component:GetCouponComponent 
      },
      {
        path: 'getAllCoupons',
        component:GetAllCouponsComponent 
      },
      {
        path: 'getAllCompanyCoupons',
        component:GetAllCompanyCouponsComponent 
      },
      {
        path: 'getCouponsByType',
        component:GetCouponsByTypeComponent 
      },
      {
        path: 'getCompanyCouponsByTheirType',
        component:GetCompanyCouponsByTheirTypeComponent 
      },
      {
        path: 'getCouponLasserThenGivenPrice',
        component:GetCouponLasserThenGivenPriceComponent 
      },
      {
        path: 'getCouponUpToGivenEndDate',
        component:GetAllCouponsUpUntillGiveDateComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }