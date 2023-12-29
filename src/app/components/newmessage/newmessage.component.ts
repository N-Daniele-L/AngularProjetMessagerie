import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployesService} from "../../services/employes.service";
import {MessageService} from "../../services/messages.service";
import {Employe} from "../../entities/employe.entities";
import {InfosServices} from "../../services/infos.services";

@Component({
    selector: 'app-newmessage',
    templateUrl: './newmessage.component.html',
    styleUrl: './newmessage.component.css'
})
export class NewmessageComponent {
    employes?: Employe[]
    messageFormGroup?: FormGroup;
    infosFormGroup?: FormGroup;

    idMessage: number | undefined;

    constructor(private fb: FormBuilder, private messageService: MessageService, private infosService: InfosServices, private employeService:
        EmployesService,) {
    }

    ngOnInit(): void {
        this.employeService?.searchAll().subscribe({
            next: data => {
                this.employes = data;
                console.log(this.employes)
            }
        });
        this.messageFormGroup = this.fb.group({
            objet: null,
            contenu: null,
            dateenvoi: Date.now(),
            employe: null,
            receiver: null,
        });
        this.infosFormGroup = this.fb.group({
            employe: null,
            message: null,
        })
    }

    onSaveBrouillon() {
        // Get the selected employe
        this.employeService?.getEmploye(this.messageFormGroup?.value.employe).subscribe(emp => {
            // Replace the id with the entire object
            this.messageFormGroup?.patchValue({
                employe: emp
            });
            this.messageService.save(this.messageFormGroup?.value).subscribe(data => {
                    alert('sauvegarde ok');
                },
                err => {
                    alert(err.headers.get("error"));
                });
        });
    };

    onSaveMessage() {
        // Get the selected employe
        this.employeService?.getEmploye(this.messageFormGroup?.value.employe).subscribe(emp => {
            // Replace the id with the entire object
            this.messageFormGroup?.patchValue({
                employe: emp
            });
            this.messageService.save(this.messageFormGroup?.value).subscribe(data => {
                this.employeService?.getEmploye(this.messageFormGroup?.value.receiver).subscribe(emp => {
                        // Replace the id with the entire object
                        this.infosFormGroup?.patchValue({
                            employe: emp,
                            message: data
                        })
                        this.infosService.save(this.infosFormGroup?.value).subscribe(data => {
                                alert('sauvegarde ok');
                            },
                            err => {
                                alert(err.headers.get("error"));
                            });
                    },
                    err => {
                        console.log("data.idMess")
                        alert('error in message save ' + err.headers.get("error"));
                    });
            });

        })
    }
}

