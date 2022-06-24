import {Injectable} from '@angular/core';
import {UserDetail} from "../components/user-detail/UserDetail";
import {of} from "rxjs";
import {LastFightDetail} from "../components/user-detail/LastFightDetail";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  AVATAR_API_URL_SMALL = "https://crafatar.com/avatars/$uuid$?size=55.png";

  //todo: change to backend service
  private USERS: UserDetail[] = [
    {
      name: "WKChris",
      global_deaths: 122992,
      global_kills: -3,
      global_trophies: -123,
      uuid: "07d933b6-da0d-4aa1-bbfd-3c0ed5e0921a",
      avatar_url: this.AVATAR_API_URL_SMALL.replace("$uuid$", "07d933b6-da0d-4aa1-bbfd-3c0ed5e0921a"),
      // @ts-ignore
      last_fights: []
    } as UserDetail,
    {
      name: "TeamHardcore",
      global_deaths: 122992,
      global_kills: -3,
      global_trophies: -123,
      uuid: "dad65097-f091-4531-8431-42e2fb2bd80c",
      avatar_url:this.AVATAR_API_URL_SMALL.replace("$uuid$","dad65097-f091-4531-8431-42e2fb2bd80c"),
      // @ts-ignore
      last_fights: []
    } as UserDetail,
  ];

  private FIGHTS: LastFightDetail[] = [
    {
      fight_time: this.randomNumber(2, 20) + " Minuten",
      timestamp: "Vor 10 Minuten",
      winner: this.USERS[1],
      looser: this.USERS[0],
      trophies: this.randomNumber(0, 60)+" Tophäen",
    },
    {
      fight_time: this.randomNumber(2, 20) + " Minuten",
      timestamp: "Vor 10 Minuten",
      winner: this.USERS[1],
      looser: this.USERS[0],
      trophies: this.randomNumber(0, 60)+" Tophäen",
    },
    {
      fight_time: this.randomNumber(2, 20) + " Minuten",
      timestamp: "Vor 10 Minuten",
      winner: this.USERS[1],
      looser: this.USERS[0],
      trophies: this.randomNumber(0, 60)+" Tophäen",
    },
    {
      fight_time: this.randomNumber(2, 20) + " Minuten",
      timestamp: "Vor 10 Minuten",
      winner: this.USERS[1],
      looser: this.USERS[0],
      trophies: this.randomNumber(0, 60)+" Tophäen",
    },
];

  constructor() {
    this.USERS[0].last_fights.push(this.FIGHTS[0]);
    this.USERS[0].last_fights.push(this.FIGHTS[1]);
    this.USERS[0].last_fights.push(this.FIGHTS[2]);
    this.USERS[0].last_fights.push(this.FIGHTS[3]);
    this.USERS[0].last_fights.push(this.FIGHTS[0]);
    this.USERS[1].last_fights.push(this.FIGHTS[0]);
  }

  public getDetail(name: string) {
    const user = this.USERS.find(value => value.name == name)!;
    return of(user);
  }

  randomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
