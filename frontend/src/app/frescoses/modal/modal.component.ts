import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, NgModule, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Frescoes } from 'src/app/model/Frescoes';
import { FrescosesService } from 'src/app/services/frescoses.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  fromPage!: Frescoes;
  message ="";
  alertMsg = false;
  center="37.775, -122.434";
  // google maps zoom level

  constructor(private httpClient: HttpClient, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalComponent>, private frescoesService: FrescosesService) {

  }

  ngOnInit() {
    this.fromPage = this.data.f;
    this.center = this.fromPage.GEO_SHAPE.coordinates[1]+", "+this.fromPage.GEO_SHAPE.coordinates[0];
    /*this.options.center!.lat=this.fromPage.GEO_SHAPE.coordinates[0];
    this.options.center!.lng=this.fromPage.GEO_SHAPE.coordinates[1];*/

  }


  deleteFrescoes(id: number){
    this.frescoesService.deleteFrescoes(id).subscribe(msg => {
        this.message = msg.message;
        this.alertMsg = true;
        if (this.alertMsg) {
         setTimeout(() => {this.alertMsg=false; this.closeModal();}, 3000);
        }
    });
  }




  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }



}


