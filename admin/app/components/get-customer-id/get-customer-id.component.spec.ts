import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerIdComponent } from './get-customer-id.component';

describe('GetCustomerIdComponent', () => {
  let component: GetCustomerIdComponent;
  let fixture: ComponentFixture<GetCustomerIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomerIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
