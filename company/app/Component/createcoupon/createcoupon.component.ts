import { Component, OnInit } from '@angular/core';

import { Coupon } from '../../common/Coupon';

import {Http} from '@angular/http';

import swal from 'sweetalert2';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  public coupon : Coupon = new Coupon();

  // dependancy injection for http object ->will become
  // a member of this class  
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  public createCoupon()
  {
      this._http.post('http://localhost:8080/Company/createCoupon'
      ,this.coupon).subscribe(function(response)
      {
        console.log(response);
      });

      swal({
        position: 'center',
        type: 'success',
        title: 'Success!',
        text:'Your Coupon Has Been Saved',
        showConfirmButton: false,
        timer: 1800
        })
  }
}