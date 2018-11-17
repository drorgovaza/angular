import { Component, OnInit } from '@angular/core';

import {Coupon} from '../../common/Coupon';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Http} from '@angular/http';

@Component({
  selector: 'app-get-all-purchesed-coupons',
  templateUrl: './get-all-purchesed-coupons.component.html',
  styleUrls: ['./get-all-purchesed-coupons.component.css']
})
export class GetAllPurchesedCouponsComponent implements OnInit {

  public _coupons : Coupon[] = [
  ];

  getAllPurchesedCoupons()
  {
    var self = this;
    this._http.get('http://localhost:8080/customerApi/getAllPurchesedCoupons')
    .map(
      function (couponResponse)
      {
        return couponResponse.json();
      }
    ).subscribe(
      function(coupons)
      {
        for(let c of coupons)
        {
          console.log(c);
        }
        self._coupons = coupons;
      }
    )
  }

  constructor(private _http : Http) { }

  ngOnInit() {
  }

}