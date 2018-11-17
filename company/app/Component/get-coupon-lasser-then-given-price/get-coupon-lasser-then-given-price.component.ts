import { Component, OnInit } from '@angular/core';
import {Coupon} from '../../common/Coupon';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { Type } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-get-coupon-lasser-then-given-price',
  templateUrl: './get-coupon-lasser-then-given-price.component.html',
  styleUrls: ['./get-coupon-lasser-then-given-price.component.css']
})
export class GetCouponLasserThenGivenPriceComponent implements OnInit {

  public CouponPrice :any;
  public _coupons : Coupon[] = [];

  getCouponsByPrice()
  {
    console.log(this.CouponPrice);
    var url = 'http://localhost:8080/Company/getCouponsLaserThenPrice/' + this.CouponPrice;
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