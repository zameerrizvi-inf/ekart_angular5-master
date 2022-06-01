import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
  faLinkedinIn,
  faTwitterSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  productTypes: string[];
  faInsta = faInstagram;
  faFb = faFacebookSquare;
  faLinkedIn = faLinkedinIn;
  faTwitter = faTwitterSquare;

  constructor(private router: Router, private ds: DataService) {
    this.productTypes = ds.productTypes;
  }

  ngOnInit() {}
}
