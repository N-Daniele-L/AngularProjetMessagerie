import {Bureau} from "./bureau.entities";

export interface Employe{
  idEmploye: number;
  nom: string;
  prenom: string;
  mailEmp: string;
  bureau: Bureau;
}
