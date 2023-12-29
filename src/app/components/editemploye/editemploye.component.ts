import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BureauxService} from "../../services/bureaux.service";
import {ActivatedRoute} from "@angular/router";
import {EmployesService} from "../../services/employes.service";
import {Bureau} from "../../entities/bureau.entities";

@Component({
  selector: 'app-editemploye',
  templateUrl: './editemploye.component.html',
  styleUrl: './editemploye.component.css'
})
export class EditemployeComponent {
  employeFormGroup?: FormGroup;
  submitted = false;
  idEmploye: number;
  bureaux?: Bureau[];
  constructor(private employeService: EmployesService,private bureauService: BureauxService,private fb:
    FormBuilder,activatedRoute : ActivatedRoute) {
    this.idEmploye= parseInt(activatedRoute.snapshot.params['idEmploye']);
  }
  ngOnInit(): void {
    this.bureauService?.searchAll().subscribe({
      next: data => {this.bureaux = data;console.log(this.bureaux)}
    });
    this.employeService.getEmploye(this.idEmploye).subscribe(
      emp =>{this.employeFormGroup = this.fb.group({
        idEmploye: [emp.idEmploye, Validators.required],
        nom: [emp.nom, Validators.required],
        prenom: [emp.prenom, Validators.required],
        mailEmp: [emp.mailEmp, Validators.required],
        bureau: [emp.bureau, Validators.required]
      })
      });
  }
  onUpdateClient(): void {
    if (this.employeFormGroup?.invalid) { return; }
    this.submitted = true;
    this.bureauService?.getBureau(this.employeFormGroup?.value.bureau).subscribe(bur => {
      // Replace the id with the entire object
      this.employeFormGroup?.patchValue({
        bureau: bur
      });

      this.employeService.updateEmploye(this.employeFormGroup?.value).subscribe(data => {
          alert('maj ok')
        },
        err => {
          alert(err.headers.get("error"));
        });
    })
  }
}
