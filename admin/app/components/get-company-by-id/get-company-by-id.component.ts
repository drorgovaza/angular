import { Component, OnInit } from '@angular/core';

import {Company} from '../../common/Company';

import 'rxjs/add/operator/map';

import {Http} from '@angular/http';

@Component({
  selector: 'app-get-company-by-id',
  templateUrl: './get-company-by-id.component.html',
  styleUrls: ['./get-company-by-id.component.css']
})
export class GetCompanyByIdComponent implements OnInit {

  public _company : Company;
  public idtoget : Number;


  constructor(private _http : Http) { }
  
  ngOnInit() {
  }

  public getCompany()
  {
    // var url = 'http://localhost:8080/adminApi/getCompany/' + this.idtoget;
    var self = this;
    this._http.get('http://localhost:8081/admin/updateCompany/' + this.idtoget)
    .map(
    function (companyResponse)
      {
        return companyResponse.json();
      }
    ).subscribe(
      function(company)
      {
        self._company = company;
      }
    )
  }

}