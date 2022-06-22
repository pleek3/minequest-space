import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public isVisited = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  checkVisited() {
    this.isVisited = !this.isVisited;
    console.log(this.isVisited);
  }
}
