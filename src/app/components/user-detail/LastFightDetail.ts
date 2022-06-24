import {UserDetail} from "./UserDetail";

export interface LastFightDetail{
  winner : UserDetail;
  looser : UserDetail;
  fight_time: string;
  timestamp: string; //todo: change to right, eg. long (Vor 10 Minuten);
  trophies: string; //todo: change to right, eg. long (Vor 10 Minuten);
}
