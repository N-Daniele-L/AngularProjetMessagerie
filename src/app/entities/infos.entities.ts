import {Employe} from "./employe.entities";
import {Messages} from "./message.entities";

export interface Infos{
  receiver: Employe;
  mess: Messages;
  dateLecture: string;
}
