
import { Component, OnInit } from '@angular/core';

import {Coupon} from '../../common/Coupon';

import 'rxjs/add/operator/map';

import {Http} from '@angular/http';
import { Type } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-get-coupons-by-type',
  templateUrl: './get-coupons-by-type.component.html',
  styleUrls: ['./get-coupons-by-type.component.css']
})
export class GetCouponsByTypeComponent implements OnInit {

  public CouponType : any;
  public _coupons : Coupon[] = [];

  getCouponsByType()
  {
    console.log(this.CouponType);
    var url = 'http://localhost:8080/companyApi/getAllCouponsByType/' + this.CouponType;
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