import { Component, OnInit } from '@angular/core';

import {Coupon} from '../../common/Coupon';
import 'rxjs/add/operator/map';


import {Http} from '@angular/http';

@Component({
  selector: 'app-get-all-purches-coupons-by-type',
  templateUrl: './get-all-purches-coupons-by-type.component.html',
  styleUrls: ['./get-all-purches-coupons-by-type.component.css']
})
export class GetAllPurchesCouponsByTypeComponent implements OnInit {

  public CouponType : any;
  public _coupons : Coupon[] = [];

 getCouponsByType()
  {
    console.log(this.CouponType);
    var url = 'http://localhost:8080/Customer/getAllPurchesedCouponsByType/' + this.CouponType;
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
  