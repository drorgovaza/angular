import { Component, OnInit } from '@angular/core';

import {Company} from '../../common/Company';

import {Http} from '@angular/http';

import swal from 'sweetalert2';

@Component({
  selector: 'app-remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit {

  public company : Company = new Company();
  public idtoremove : Number;
  
  // dependancy injection for http object ->will become
  // a member of this class
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  removeCompany(){

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
          var url = 'http://localhost:8080/adminApi/removeCompany/' + this.idtoremove;
          this._http.delete(url).subscribe(function(response)
            {
              console.log(response);
            });
            swalWithBootstrapButtons(
              'Deleted!',
              'Your Company has been deleted.',
              'success'
            )
          } else if (
            result.dismiss === swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons(
              'Cancelled',
              'Your Company is safe :)',
              'error'
            )
          }
        })
    
    
    
        }
       }    