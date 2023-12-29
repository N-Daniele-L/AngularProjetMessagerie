import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Infos} from '../entities/infos.entities';

@Injectable({providedIn:"root"})
export class InfosServices{
    private host = environment.host;
    constructor(private http: HttpClient) {
    }
  searchAll(): Observable<Infos[]>{
    return this.http.get<Infos[]>(this.host + '/infos/all');
  }
}
