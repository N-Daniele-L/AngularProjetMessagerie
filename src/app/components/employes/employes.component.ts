import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EmployesService} from '../../services/employes.service';
import {Observable} from 'rxjs';
import {Employe} from '../../entities/employe.entities';
import {MessageService} from "../../services/messages.service";
@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export class EmployesComponent implements OnInit{
  employes?: Employe[];


  constructor(private employesService: EmployesService,private messagesService: MessageService, private router:
    Router) { }
  ngOnInit(): void {
    this.messagesService.searchAll()
  }
  onSearch(value: any) {
    this.employesService.searchEmploye(value.nom).subscribe(
      {
        next: data => {this.employes = data}
      });
  }
  onNewEmploye() {
    this.router.navigateByUrl('newEmploye');
  }
  onDelete(emp: Employe) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.employesService.deleteEmploye(emp).subscribe(
        {
          next: data => {
            this.onSearch(emp);
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }
  onEdit(emp: Employe) {
    this.router.navigateByUrl('editEmploye/'+emp.idEmploye);
  }


}

