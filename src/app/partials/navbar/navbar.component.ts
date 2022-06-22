import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) {
  }

  changeAccountStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  getAccountStatus() {
    return this.isLoggedIn;
  }

  ngOnInit(): void {
  }

  search(name: String) {
    if (name)
      console.log(name);
  }

}
