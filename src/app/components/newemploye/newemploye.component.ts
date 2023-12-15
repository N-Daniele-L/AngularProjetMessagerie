import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployesService} from '../../services/employes.service';
import {BureauxService} from "../../services/bureaux.service";
import {Bureau} from "../../entities/bureau.entities";

@Component({
  selector: 'app-newemploye',
  templateUrl: './newemploye.component.html',
  styleUrl: './newemploye.component.css'
})
export class NewemployeComponent implements OnInit{
    bureaux?: Bureau[]
    employeFormGroup?: FormGroup;

    idEmploye: number|null=null;
    constructor(private fb: FormBuilder, private employeService:
        EmployesService, private bureauService: BureauxService) {
    }
    ngOnInit(): void {
      this.bureauService?.searchAll().subscribe({
          next: data => {this.bureaux = data;console.log(this.bureaux)}
        });
        this.employeFormGroup = this.fb.group({
            mailEmp: null,
            nom: null,
            prenom:null,
            bureau: null,
        });

    }
    onSaveEmploye() {




        // Get the selected Taxi and Adresse objects
        this.bureauService?.getBureau(this.employeFormGroup?.value.bureau).subscribe(bur => {


          // Replace the id with the entire object
          this.employeFormGroup?.patchValue({
            bureau: bur
          });


        this.employeService.save(this.employeFormGroup?.value).subscribe(data =>
        {alert('sauvegarde ok');},
            err => {
                alert(err.headers.get("error"));
            });

    });
    };

}

