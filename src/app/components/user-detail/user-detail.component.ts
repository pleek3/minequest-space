import {Component, OnInit} from '@angular/core';
import {UserDetailService} from "../../services/user-detail.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {UserDetail} from "./UserDetail";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public userDetails: UserDetail | undefined;

  constructor(private service: UserDetailService, private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.service.getDetail(name).subscribe(value => this.userDetails = value);
  }

  goBack(): void {
    this.location.back();
  }

}
