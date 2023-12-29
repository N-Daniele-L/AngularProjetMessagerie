import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BureauxService} from '../../services/bureaux.service';
import {Observable} from 'rxjs';
import {Bureau} from '../../entities/bureau.entities';


@Component({
  selector: 'app-bureaux',
  templateUrl: './bureaux.component.html',
  styleUrl: './bureaux.component.css'
})
export class BureauxComponent {
  bureaux?: Bureau[];
  constructor(private bureauxService: BureauxService, private router:
    Router) { }
  ngOnInit(): void { }
  onSearch(value: any) {
    this.bureauxService.searchBureau(value.sigle).subscribe(
      {
        next: data => {this.bureaux = data;console.log(this.bureaux)}
      });
  }
  allBureau() {
    this.bureauxService.searchAll().subscribe({
      next: data => {this.bureaux = data}
    })
  }
  onNewBureau() {
    this.router.navigateByUrl('newBureau');
  }
  onDelete(bur: Bureau) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.bureauxService.deleteBureau(bur).subscribe(
        {
          next: data => {
            this.onSearch(bur);
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }
  onEdit(bur: Bureau) {
    this.router.navigateByUrl('editBureau/'+bur.idBureau);
  }


}
