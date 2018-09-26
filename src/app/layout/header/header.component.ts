import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLoginModal(content) {
    this.modalService.open(content, { centered: true });
    // this.router.navigate(['login'])
  }
  login(){
    alert("hell bhava login");
  }

}
