import {LastFightDetail} from "./LastFightDetail";

export interface UserDetail {
  name: string;
  global_kills: number;
  global_deaths: number;
  global_trophies: number;
  avatar_url: string;
  uuid: string;
  last_fights: LastFightDetail[];
}
