import { Component, OnInit } from '@angular/core';

import { Coupon } from '../../common/Coupon';

import {Http} from '@angular/http';
import{observable,of,Subject} from 'rxjs';

import swal from 'sweetalert2';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public coupon : Coupon = new Coupon();
 
  // dependancy injection for http object ->will become
  // a member of this class  

  constructor(private _http : Http) { }

  ngOnInit() {
  }

  public updateCoupon()
  {
      this._http.put('http://localhost:8080/Company/updateCoupon'
      ,this.coupon).subscribe(function(response)
      {
        console.log(response);
      });

      swal({
        position: 'center',
        type: 'success',
        title: 'Success!',
        text:'Your Coupon Has Been Updated',
        showConfirmButton: false,
        timer: 1800
        })
    }
    }