import {CrateContent} from "./CrateContent";

export interface CrateDetail {
  name: string;
  image_src: string; //todo: evt zu einer url ändern
  is_new: boolean;
  price: number;
  content: CrateContent[];
  //todo: add crate items
}
