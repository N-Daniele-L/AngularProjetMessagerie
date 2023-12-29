import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Infos} from '../entities/infos.entities';
import {Messages} from "../entities/message.entities";

@Injectable({providedIn:"root"})
export class InfosServices{
    private host = environment.host;
    constructor(private http: HttpClient) {
    }
  searchAll(): Observable<Infos[]>{
    return this.http.get<Infos[]>(this.host + '/infos/all');
  }
  update(inf: Infos): Observable<Infos>{
      return this.http.put<Infos>(this.host + '/infos/' + inf.employe.idEmploye + '/'+ inf.message.idMess, inf);
  }
    save(inf: Infos): Observable<Infos> {
        //add Access-Control-Allow-Origin: *
        return this.http.post<Infos>(this.host + '/infos', inf, {
            headers: { 'Access-Control-Allow-Origin': '*' },
        });
    }
}
