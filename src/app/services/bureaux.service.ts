import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Bureau} from '../entities/bureau.entities';

@Injectable({providedIn:"root"})
export class BureauxService{
    private host = environment.host;
    constructor(private http: HttpClient) {
    }
    getBureau(idBureau: number): Observable<Bureau>{
        return this.http.get<Bureau>(this.host + '/bureaux/' + idBureau);
    }
    searchBureau(sigle: string): Observable<Bureau[]>{
        return this.http.get<Bureau[]>(this.host + '/bureaux/sigle='+sigle);
    }
  searchAll(): Observable<Bureau[]>{
    return this.http.get<Bureau[]>(this.host + '/bureaux/all');
  }
    deleteBureau(bur: Bureau): Observable<void>{
        return this.http.delete<void>(this.host + '/bureaux/' + bur.idBureau);
    }
    save(bur: Bureau): Observable<Bureau> {
        //add Access-Control-Allow-Origin: *
        return this.http.post<Bureau>(this.host + '/bureaux', bur, {
            headers: { 'Access-Control-Allow-Origin': '*' },
        });
    }
    updateBureau(bur: Bureau): Observable<Bureau>{
        return this.http.put<Bureau>(this.host + '/bureaux/' + bur.idBureau, bur);
    }
}
