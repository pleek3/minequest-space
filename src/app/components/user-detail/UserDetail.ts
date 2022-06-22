import {LastFightDetail} from "./LastFightDetail";

export interface UserDetail {
  name: string;
  global_kills: number;
  global_deaths: number;
  global_trophies: number;
  last_fights: LastFightDetail[];
}
