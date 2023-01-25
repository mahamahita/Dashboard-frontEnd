import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceToFactureComponent } from './add-invoice-to-facture.component';

describe('AddInvoiceToFactureComponent', () => {
  let component: AddInvoiceToFactureComponent;
  let fixture: ComponentFixture<AddInvoiceToFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInvoiceToFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvoiceToFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
