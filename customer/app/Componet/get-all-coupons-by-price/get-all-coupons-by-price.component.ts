import { Component, OnInit } from '@angular/core';

import { Coupon } from '../../common/Coupon';

import 'rxjs/add/operator/map';

import {Http} from '@angular/http';

@Component({
  selector: 'app-get-coupons-by-price',
  templateUrl: './get-coupons-by-price.component.html',
  styleUrls: ['./get-coupons-by-price.component.css']
})
export class GetCouponsByPriceComponent implements OnInit {

  public priceGiven : Number;
  public _coupons : Coupon[] = [];
  
  // getCouponsByPrice()
  // {
  //     // console.log(this.CouponType);

  //   var url = 'http://localhost:8080/customerApi/getAllPurchesedCouponsByPrice/' + this.priceGiven;
  //   var self = this;
  //   this._http.get(url)
  //   .map(
  //     function (couponResponse)
  //       {
  //       return couponResponse.json();    
  //       }
  //     ).subscribe(
  //       function(coupons)
  //       {
  //         for(let c of coupons)
  //         {
  //           console.log(c);
  //         }
  //         self._coupons = coupons;
  //       }
  //     )
  //   }

    constructor(private _http : Http) { }
  

    ngOnInit() {
    }

    public getgetCouponsByPrice()
    {
      this._http.put('http://localhost:8080/Customer/getAllPurchesedCouponsByPrice/', this.getgetCouponsByPrice) 
      .subscribe(function(response)
      {
        console.log(response);
  
      });
  }
  }
  