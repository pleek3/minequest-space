import {Injectable} from '@angular/core';
import {UserDetail} from "../components/user-detail/UserDetail";
import {of} from "rxjs";
import {LastFightDetail} from "../components/user-detail/LastFightDetail";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  //todo: change to backend service

  private USERS: UserDetail[] = [
    this.createUserDetail("TeamHardcore"),
    this.createUserDetail("Meezee"),
    this.createUserDetail("Rysefoxx"),
    this.createUserDetail("iRaphi"),
  ];

  constructor() {
  }

  public getDetail(name: string) {
    const user = this.USERS.find(value => value.name == name)!;
    return of(user);
  }

  private createUserDetail(name: string): UserDetail {
    return {
      name: name,
      global_deaths: this.randomNumber(0, 10),
      global_kills: this.randomNumber(0, 70),
      global_trophies: this.randomNumber(200, 1200),
      last_fights: [
        this.createFightDetail("TeamHardcore", name, "Vor 2 Minuten"),
        this.createFightDetail("TeamHardcore", name, "Vor 1 Stunde"),
        this.createFightDetail("TeamHardcore", name, "Vor 2 Stunde"),
        this.createFightDetail("TeamHardcore", name, "Vor 3 Stunde"),
        this.createFightDetail("TeamHardcore", name, "Vor 4 Stunde")
      ]
    };
  }

  private createFightDetail(winner: string, looser: string, timestamp: string): LastFightDetail {
    return {
      fight_time: this.randomNumber(2, 20) + " Minuten",
      timestamp: timestamp,
      looser: looser,
      winner: winner,
      trophies: this.randomNumber(0, 60)+" Tophäen",
    };
  }

  randomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
