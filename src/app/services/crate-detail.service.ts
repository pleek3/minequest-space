import {Injectable} from '@angular/core';
import {CrateDetail} from "../components/crate-detail/CrateDetail";
import {of} from "rxjs";
import {CrateContent} from "../components/crate-detail/CrateContent";

@Injectable({
  providedIn: 'root'
})
export class CrateDetailService {

  private CRATES: CrateDetail[] = [{
    name: "Doom",
    image_src: "assets/crates/demo_case.png",
    is_new: false,
    price: 200,
    content: [],
  } as CrateDetail,
    {
      name: "External",
      image_src: "assets/crates/demo_case.png",
      is_new: true,
      price: 200,
      content: [],
    } as CrateDetail,
    {
      name: "Indestructible",
      image_src: "http://static.ancientgaming.io/images/CSGORoll_Case_Indestructible.png",
      is_new: true,
      price: 200,
      content: [],
    } as CrateDetail];

  private CONTENT: CrateContent[] = [
    {
      name: '100 Münzen',
      chance: 0.1,
      description: 'Nicht verfügbar',
      image_src: 'assets/stats/gold-pile.svg',
    } as CrateContent,
    {
      name: 'Doom Crate',
      chance: 55.5,
      description: 'Nicht verfügbar',
      image_src: 'assets/crates/demo_case.png',
    } as CrateContent,
    {
      name: '500 Münzen',
      chance: 0.2,
      description: 'Nicht verfügbar',
      image_src: 'assets/stats/gold-pile.svg',
    } as CrateContent,
  ];

  constructor() {
    this.CRATES[0].content.push(this.CONTENT[0]);
    this.CRATES[0].content.push(this.CONTENT[1]);
    this.CRATES[0].content.push(this.CONTENT[2]);
  }

  public getDetail(name: string) {
    const crate = this.CRATES.find(value => value.name.toLowerCase() == name.toLowerCase())!;
    return of(crate);
  }
}
