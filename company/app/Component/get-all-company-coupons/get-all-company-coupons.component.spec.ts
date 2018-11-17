import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCompanyCouponsComponent } from './get-all-company-coupons.component';

describe('GetAllCompanyCouponsComponent', () => {
  let component: GetAllCompanyCouponsComponent;
  let fixture: ComponentFixture<GetAllCompanyCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCompanyCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCompanyCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
