import { Component, OnInit } from '@angular/core';

import {Customer} from '../../common/Customer';

import {Http} from '@angular/http';

import swal from 'sweetalert2';

@Component({
  selector: 'app-remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.css']
})
export class RemoveCustomerComponent implements OnInit {

  public customer : Customer = new Customer();
  public idtoremove : Number;
  
  // dependancy injection for http object ->will become
  // a member of this class
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  removeCustomer(){

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
          var url = 'http://localhost:8081/admin/updateCompany' + this.idtoremove;
        
          this._http.delete(url).subscribe(function(response)
          {
            console.log(response);
          });
          swalWithBootstrapButtons(
            'Deleted!',
            'Your Customer has been deleted.',
            'success'
            )
          }
        })
    
    
    
        }
       }  