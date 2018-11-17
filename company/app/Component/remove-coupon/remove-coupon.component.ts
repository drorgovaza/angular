import { Component, OnInit } from '@angular/core';

import { Coupon } from '../../common/Coupon';

import {Http} from '@angular/http';

import swal from 'sweetalert2';

@Component({
  selector: 'app-remove-coupon',
  templateUrl: './remove-coupon.component.html',
  styleUrls: ['./remove-coupon.component.css']
})
export class RemoveCouponComponent implements OnInit {

  public coupon : Coupon = new Coupon();
  public idtoremove : Number;

  // dependancy injection for http object ->will become
  // a member of this class
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  removeCoupon(){

    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
    var url = 'http://localhost:8080/Company/removeCoupon/' + this.idtoremove;
 
  this._http.delete(url).subscribe(function(response)
     {
       console.log(response);
     });
     swalWithBootstrapButtons(
      'Deleted!',
      'Your Coupon has been deleted.',
      'success'
    )
  } else if (
    result.dismiss === swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons(
      'Cancelled',
      'Your Coupon is safe :)',
      'error'
    )
  }
})



}
}