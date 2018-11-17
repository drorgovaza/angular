import { Component, OnInit } from '@angular/core';

import {Http} from '@angular/http';
//import { GetAllPurchasedCouponComponent } from '../component/GetAllPurchasedCouponComponent/;
import { puts } from 'util';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public idtoget : Number;

  constructor(private _http : Http) { }

  ngOnInit() {
  }

  public purchaseCoupon()
  {
    this._http.put('http://localhost:8080/customerApi/purchaseCoupon/', this.idtoget) 
    .subscribe(function(response)
    {
      console.log(response);

    });
}
}