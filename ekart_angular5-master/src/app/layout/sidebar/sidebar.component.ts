import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  productTypes: string[];

  constructor(private router: Router, private ds: DataService) {
    this.productTypes = ds.productTypes;
  }

  ngOnInit() {}
}
