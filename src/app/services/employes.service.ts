import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Employe} from '../entities/employe.entities';
import {Infos} from "../entities/infos.entities";

@Injectable({providedIn:"root"})
export class EmployesService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  getEmploye(idEmp: number): Observable<Employe>{
    return this.http.get<Employe>(this.host + '/employes/' + idEmp);
  }
  searchEmployeUnique(nom: string,prenom:string,mail:string): Observable<Employe[]>{
    return this.http.get<Employe[]>(this.host + '/employes/'+nom+'/'+prenom+'/'+mail);
  }
  searchAll(): Observable<Employe[]>{
    return this.http.get<Employe[]>(this.host + '/employes/all');

  }

  searchEmploye(nom: string): Observable<Employe[]>{
    return this.http.get<Employe[]>(this.host + '/employes/nom=' + nom);
  }
  deleteEmploye(emp: Employe): Observable<void>{
    return this.http.delete<void>(this.host + '/employes/' + emp.idEmploye);
  }
  save(emp: Employe): Observable<Employe> {
    //add Access-Control-Allow-Origin: *
    return this.http.post<Employe>(this.host + '/employes', emp, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
  updateEmploye(emp: Employe): Observable<Employe>{
    return this.http.put<Employe>(this.host + '/employes/' + emp.idEmploye, emp);
  }
}
