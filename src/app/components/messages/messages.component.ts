import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MessageService} from "../../services/messages.service";
import {Messages} from "../../entities/message.entities";
import {Infos} from "../../entities/infos.entities";
import {InfosServices} from "../../services/infos.services";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  messages?: Messages[];
  infos?: Infos[];
  constructor(private messagesService: MessageService, private infosService: InfosServices, private router:
    Router) {

  }
  ngOnInit(): void {
    this.infosService?.searchAll().subscribe({
          next: info => {this.infos  = info ;console.log(this.infos)}
      });
  }
  onSearch(value: any) {
    this.messagesService.searchMessageBySender(value.mailEmp).subscribe(
      {
        next: data => {this.messages = data;console.log(this.messages)}
      });
  }
  allMessage() {
    this.messagesService.searchAll().subscribe({
      next: data => {this.messages = data}
    })
  }
  onNewMessage() {
    this.router.navigateByUrl('newMessage');
  }
  onDelete(msg: Messages) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.messagesService.deleteMessages(msg).subscribe(
        {
          next: data => {
            this.onSearch(msg);
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }
  onEdit(msg: Messages) {
    this.router.navigateByUrl('editMessage/'+msg.idMess);
  }
}
