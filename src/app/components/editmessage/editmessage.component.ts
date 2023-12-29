import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployesService} from "../../services/employes.service";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "../../services/messages.service";
import {Employe} from "../../entities/employe.entities";

@Component({
  selector: 'app-editmessage',
  templateUrl: './editmessage.component.html',
  styleUrl: './editmessage.component.css'
})
export class EditmessageComponent {
  messageFormGroup?: FormGroup;
  submitted = false;
  idMess: number;
  employes?: Employe[];
  constructor(private messageService: MessageService,private employeService: EmployesService,private fb:
      FormBuilder,activatedRoute : ActivatedRoute) {
    this.idMess= parseInt(activatedRoute.snapshot.params['idMess']);
  }
  ngOnInit(): void {
    this.employeService?.searchAll().subscribe({
      next: data => {this.employes = data;console.log(this.employes)}
    });
    this.messageService.getMessage(this.idMess).subscribe(
        mess =>{this.messageFormGroup = this.fb.group({
          idMess: [mess.idMess, Validators.required],
          objet: [mess.objet, Validators.required],
          contenu: [mess.contenu, Validators.required],
          employe: mess.employe,
          dateenvoi: Date.now(),
        })
        });
  }
  onUpdateMessage(): void {
    this.submitted = true;
    if (this.messageFormGroup?.invalid) { return; }
      this.messageService.updateMessage(this.messageFormGroup?.value).subscribe(data => {
            alert('maj ok')
          },
          err => {
            alert(err.headers.get("error"));
          });

  }
}
