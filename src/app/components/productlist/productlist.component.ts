import { Component, OnInit } from '@angular/core';
import * as products from './products.json';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  
  products = (products as any).default;
}
