import {Employe} from "./employe.entities";
import {Messages} from "./message.entities";

export interface Infos{
  employe: Employe;
  message: Messages;
  datelecture: Date;
}
