import {Employe} from "./employe.entities";

export interface Messages{
  idMess: number;
  objet: string;
  contenu: string;
  dateEnvoi: string;
  sender: Employe;
}
