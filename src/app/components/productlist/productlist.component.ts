import { Component, OnInit } from '@angular/core';
import * as products from './products.json';
import Swal from 'sweetalert2'	

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  products = (products as any).default;
  p: number = 1;
  searchText: string = '';

  sortLowToHigh() {
    this.products.sort((p1: any, p2: any) => {
      console.log(p1, p2);
      return p1.price - p2.price;
    });
  }
  sortHighToLow() {
    this.products.sort((p1: any, p2: any) => p2.price - p1.price);
  }

  test(){
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }

  flag = false;
}
