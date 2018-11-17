import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompamyComponent } from './update-compamy.component';

describe('UpdateCompamyComponent', () => {
  let component: UpdateCompamyComponent;
  let fixture: ComponentFixture<UpdateCompamyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCompamyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompamyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
