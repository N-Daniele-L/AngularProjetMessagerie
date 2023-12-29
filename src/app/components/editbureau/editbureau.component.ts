import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BureauxService} from "../../services/bureaux.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editbureau',
  templateUrl: './editbureau.component.html',
  styleUrl: './editbureau.component.css'
})
export class EditbureauComponent {
  bureauFormGroup?: FormGroup;
  submitted = false;
  idBureau: number;
  constructor(private bureauService: BureauxService,private fb: FormBuilder,activatedRoute : ActivatedRoute) {
    this.idBureau= parseInt(activatedRoute.snapshot.params['idBureau']);
  }
  ngOnInit(): void {
    this.bureauService.getBureau(this.idBureau).subscribe(
      bureau =>{this.bureauFormGroup = this.fb.group({
        idBureau: [bureau.idBureau, Validators.required],
        sigle: [bureau.sigle, Validators.required],
        tel: [bureau.tel, Validators.required]
      })
      });
  }
  onUpdateClient(): void {
    this.submitted = true;
    if (this.bureauFormGroup?.invalid) { return; }

    this.bureauService.updateBureau(this.bureauFormGroup?.value).subscribe(data => {alert('maj ok')},
      err => {
        alert(err.headers.get("error"));
      });
  }
}

