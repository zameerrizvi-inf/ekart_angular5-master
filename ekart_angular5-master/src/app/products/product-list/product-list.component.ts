import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';

import { DataService } from '../../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  pageNo: number;
  private maxPageNo: number;
  type: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ds: DataService,
  ) {}

  ngOnInit() {
    combineLatest(
      this.route.params,
      this.route.queryParams,
      (param, query) => {
        this.ds.getProductsCountByType(param.type).subscribe(obj => {
          this.maxPageNo = Math.ceil(obj.count / obj.limit);
        });
        this.pageNo = +(query.page || 1);
        this.type = param.type;
        return this.ds.getProductsByType(param.type, +query.page)
      }
    ).subscribe(products$ => {
      this.products$ = products$;
    });
  }

  previousLinkDisabled(): boolean {
    return this.pageNo <= 1;
  }

  nextLinkDisabled(): boolean {
    return this.pageNo >= this.maxPageNo;
  }
}
