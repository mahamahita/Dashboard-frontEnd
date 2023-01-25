import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToFactureComponent } from './add-product-to-facture.component';

describe('AddProductToFactureComponent', () => {
  let component: AddProductToFactureComponent;
  let fixture: ComponentFixture<AddProductToFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductToFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductToFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
