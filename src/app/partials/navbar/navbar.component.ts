import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = true;

  constructor(private router: Router) {
  }

  getAccountStatus() {
    return this.isLoggedIn;
  }

  ngOnInit(): void {
  }

  search(name: String) {
    if (name)
        this.router.navigateByUrl('').then(()  => {
          this.router.navigateByUrl("/users/"+name);
        });
  }

}
