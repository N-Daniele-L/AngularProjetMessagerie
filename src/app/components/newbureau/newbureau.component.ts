import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BureauxService} from "../../services/bureaux.service";
import {EmployesService} from "../../services/employes.service";

@Component({
  selector: 'app-newbureau',
  templateUrl: './newbureau.component.html',
  styleUrl: './newbureau.component.css'
})
export class NewbureauComponent {
  bureauFormGroup?: FormGroup;
  idBureau: number|null=null;
  constructor(private fb: FormBuilder, private bureauService:
    BureauxService) {
  }
  ngOnInit(): void {
    this.bureauFormGroup = this.fb.group({
      sigle: null,
      tel: null,
    });
  }
  onSaveBureau() {
    this.bureauService.save(this.bureauFormGroup?.value).subscribe(data =>
      {alert('sauvegarde ok');},
      err => {
        alert(err.headers.get("error"));
      });
  }
}
