import { Component, OnInit } from '@angular/core';
import {Company} from '../../common/Company';
import {Http} from '@angular/http';
import swal from 'sweetalert2';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public company : Company = new Company();

  
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  public createCompany()
  {
        this._http.post('http://localhost:8081/admin/createCompany'
        ,this.company).subscribe(function(response)
        {
         console.log(response);
        });

        swal({
          position: 'center',
          type: 'success',
          title: 'Success!',
          text:'Your Company Has Been Saved',
          showConfirmButton: false,
          timer: 1800
          })
  }

}