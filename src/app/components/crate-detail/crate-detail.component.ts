import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {CrateDetailService} from "../../services/crate-detail.service";
import {CrateDetail} from "./CrateDetail";

@Component({
  selector: 'app-crate-detail',
  templateUrl: './crate-detail.component.html',
  styleUrls: ['./crate-detail.component.scss']
})
export class CrateDetailComponent implements OnInit {

  public crateDetail : CrateDetail | undefined;

  constructor(private service: CrateDetailService, private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCrate();
  }

  getCrate(){
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.service.getDetail(name).subscribe(value => this.crateDetail = value);
  }

}
