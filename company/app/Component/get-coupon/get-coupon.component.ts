import { Component, OnInit } from '@angular/core';

import { Coupon } from '../../common/Coupon';

import 'rxjs/add/operator/map';

import {Http} from '@angular/http';

@Component({
  selector: 'app-get-coupon',
  templateUrl: './get-coupon.component.html',
  styleUrls: ['./get-coupon.component.css']
})
export class GetCouponComponent implements OnInit {

  public _coupon : Coupon;
  public idtoget : Number;

  getCoupon()
  {
    var url = 'http://localhost:8080/Company/getCoupon/' + this.idtoget;
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
          self._coupon = coupon;
        }
      )
    }

    constructor(private _http : Http) { }
  

    ngOnInit() {
    }
  }