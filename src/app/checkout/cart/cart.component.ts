import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalCartItems$ = 1;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll') onScroll() {
    var header = document.getElementById("orderSummary");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }

  };

}
