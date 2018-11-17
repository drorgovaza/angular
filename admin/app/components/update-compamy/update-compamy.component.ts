import { Component, OnInit } from '@angular/core';
import {Company} from '../../common/Company';
import { map } from 'rxjs/operators';

import {Http} from '@angular/http';21


import swal from 'sweetalert2';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public company : Company = new Company();

  // dependancy injection for http object ->will become
  // a member of this class
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  public updateCompany()
  {
    this._http.put ('http://localhost:8081/admin/updateCompany'
    ,this.company).subscribe(function(response)
   {1
     console.log(response);
   });

   swal({
    position: 'center',
    type: 'success',
    title: 'Success!',
    text:'Your Company Has Been Updated',
    showConfirmButton: false,
    timer: 1800
    })
  }
}