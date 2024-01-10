import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Messages} from '../entities/message.entities';

@Injectable({providedIn:"root"})
export class MessageService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  getMessage(idMess: number): Observable<Messages>{
    return this.http.get<Messages>(this.host + '/messages/' + idMess);
  }
  searchAll(): Observable<Messages[]>{
    return this.http.get<Messages[]>(this.host + '/messages/all');
  }

  getMessageBetween(id: number,before: string, after: string): Observable<Messages[]>{
    return this.http.get<Messages[]>(this.host + '/messages/id='+ id +'/before=' + before + '/after=' + after);
  }
  searchMessageByObjet(objet: string): Observable<Messages[]>{
    return this.http.get<Messages[]>(this.host + '/messages/objet=' + objet);
  }
  searchMessageBySenderandObjet(mail: string,objet: string): Observable<Messages[]>{
    return this.http.get<Messages[]>(this.host + '/messages/mail=' +mail +'/objet=' + objet);
  }
  searchMessageBySender(mail: string): Observable<Messages[]>{
    return this.http.get<Messages[]>(this.host + '/messages/mail='+ mail )
  }
  deleteMessages(msg: Messages): Observable<void>{
    return this.http.delete<void>(this.host + '/messages/' + msg.idMess);
  }
  save(msg: Messages): Observable<Messages> {
    //add Access-Control-Allow-Origin: *
    return this.http.post<Messages>(this.host + '/messages', msg, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
  updateMessage(msg: Messages): Observable<Messages>{
    return this.http.put<Messages>(this.host + '/messages/' + msg.idMess, msg);
  }
}
