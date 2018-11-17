import { Component, OnInit } from '@angular/core';
import {Coupon} from '../../common/Coupon';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Component({
  selector: 'app-get-all-coupons-up-untill-give-date',
  templateUrl: './get-all-coupons-up-untill-give-date.component.html',
  styleUrls: ['./get-all-coupons-up-untill-give-date.component.css']
})
export class GetAllCouponsUpUntillGiveDateComponent implements OnInit {

  public CouponDate :any;
  public _coupons : Coupon[] = [];

  getCouponsByDate()
  {
    console.log(this.CouponDate);
    var url = 'http://localhost:8080/Company/getCouponsUpToGivenDate/' + this.CouponDate;
    var self = this;
    this._http.get(url)
    .map(
      function (couponResponse)
        {
        return couponResponse.json();    
        }
      ).subscribe(
        function(coupon)
        {
          self._coupons = coupon;
        }
      )
    }

  constructor(private _http : Http) { }

  ngOnInit() {
  }

  }

