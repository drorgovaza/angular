import { Component, OnInit } from '@angular/core';

import {Customer} from '../../common/Customer';

import 'rxjs/add/operator/map';

import {Http} from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-get-customer-by-id',
  templateUrl: './get-customer-by-id.component.html',
  styleUrls: ['./get-customer-by-id.component.css']
})
export class GetCustomerByIdComponent implements OnInit {

  public _customer : Customer;
  public idtoget : Number;
  
  getCustomer()
  {
    var url = "http://localhost:8081/admin/updateCompany" + this.idtoget;
    var self = this;
    this._http.get(url)
    .map(
    function (customerResponse)
      {
        return customerResponse.json();
      }
    ).subscribe(
      function(customer)
      {
        self._customer = customer;
      }
    )
  }

  constructor(private _http : Http) { }

  ngOnInit() {
  }

}