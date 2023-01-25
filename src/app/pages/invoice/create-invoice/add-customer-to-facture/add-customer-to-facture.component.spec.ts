import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerToFactureComponent } from './add-customer-to-facture.component';

describe('AddCustomerToFactureComponent', () => {
  let component: AddCustomerToFactureComponent;
  let fixture: ComponentFixture<AddCustomerToFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerToFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerToFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
