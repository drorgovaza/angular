import { Component, OnInit } from '@angular/core';

import {Coupon} from '../../common/Coupon';

import 'rxjs/add/operator/map';

import {Http} from '@angular/http';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  public _coupons : Coupon[] = [
  ];


  ngOnInit() {
    var self = this;
    this._http.get('http://localhost:8080/Company/getAllCoupons')
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
  }