import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'ngx-products',
  template: `
  <router-outlet></router-outlet>
`,
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
