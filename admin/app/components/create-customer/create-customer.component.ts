import { Component, OnInit } from '@angular/core';

import {Customer} from '../../common/Customer';

import {Http} from '@angular/http';

import swal from 'sweetalert2';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  public customer : Customer = new Customer();

  constructor(private _http : Http) { }

  ngOnInit() {
  }

  public createCustomer()
  {
     this._http.post('http://localhost:8081/admin/createCustomer'
     ,this.customer).subscribe(function(response)
     {
       console.log(response);
     });

     swal({
      position: 'center',
      type: 'success',
      title: 'Your Customer has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
}