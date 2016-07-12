import { Component, Injectable, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProductsService } from '../products.service';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers: [ProductsService]
})
export class SearchComponent implements OnInit {
  private query: string = 'yoo';
  private element: ElementRef;
  private productsService: ProductsService;

  constructor(element: ElementRef, productsService: ProductsService) {
      this.element = element;
      this.productsService = productsService;
      this.productsService.mockName = 'from component';
  }

  ngOnInit() {
      this.registerKeyUpEvent();
  }

  getProductService() {
      return this.productsService;
  }

  registerKeyUpEvent() {
      Observable.fromEvent(this.element.nativeElement, 'keyup')
          .debounceTime(3000)
          .subscribe((value) => { console.log(value); });
  }

}
