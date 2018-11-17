import { Component, OnInit } from '@angular/core';

import { Customer} from '../../common/Customer';

import {Http} from '@angular/http';

import swal from 'sweetalert2';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public customer : Customer = new Customer();

  // dependancy injection for http object ->will become
  // a member of this class
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  public updateCustomer()
  {
    this._http.put ('http://localhost:8080/adminApi/updateCustomer'
    ,this.customer).subscribe(function(response)
   {
     console.log(response);
   });

   swal({
    position: 'center',
    type: 'success',
    title: 'Success!',
    text:'Your Customer Has Been Updated',
    showConfirmButton: false,
    timer: 1800
    })
}
}