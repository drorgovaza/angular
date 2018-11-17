import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { RemoveCompanyComponent } from './components/remove-company/remove-company.component';
import { UpdateCompanyComponent } from './components/update-compamy/update-compamy.component';
import { GetCompanyByIdComponent } from './components/get-company-by-id/get-company-by-id.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { RemoveCustomerComponent } from './components/remove-customer/remove-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { GetCustomerByIdComponent } from './components/get-customer-id/get-customer-id.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    RemoveCompanyComponent,
    UpdateCompanyComponent,
    GetCompanyByIdComponent,
    GetAllCompaniesComponent,
    CreateCustomerComponent,
    RemoveCustomerComponent,
    UpdateCustomerComponent,
    GetCustomerByIdComponent,
    GetAllCustomersComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'createCompany',
        component: CreateCompanyComponent
      },
      {
        path:'removeCompany',
        component: RemoveCompanyComponent
      },
      {
        path:'updateCompany',
        component: UpdateCompanyComponent
      },
      {
        path:'getCompanyById',
        component: GetCompanyByIdComponent
      },
      {
        path:'getAllCompanies',
        component: GetAllCompaniesComponent
      },
      {
        path:'createCustomer',
        component: CreateCustomerComponent
      },
      {
        path:'removeCustomer',
        component: RemoveCustomerComponent
      },
      {
        path:'updateCustomer',
        component: UpdateCustomerComponent
      },
      {
        path:'getCustomerById',
        component: GetCustomerByIdComponent
      },
     
      {
        path:'getAllCustomers',
        component: GetAllCustomersComponent
      }
    ])
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }