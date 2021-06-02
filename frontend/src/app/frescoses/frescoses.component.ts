import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Frescoes } from '../model/Frescoes';
import { FrescosesService } from '../services/frescoses.service';
import { AppDataState, DataStateEnum } from '../state/frescoes.state';
import { catchError, map, startWith } from 'rxjs/operators'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-frescoses',
  templateUrl: './frescoses.component.html',
  styleUrls: ['./frescoses.component.css']
})
export class FrescosesComponent implements OnInit {

  frescoes$:Observable<AppDataState<Frescoes[]>>|null=null;
  readonly DataStateEnum = DataStateEnum;
  message = "";

  constructor(private frescoesService: FrescosesService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.onGetAll();
  }


  onGetAll(){
    this.frescoes$  = this.frescoesService.getAll().pipe(
      map(data=>({dataState : DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetAllAsc(){
    this.frescoes$  = this.frescoesService.getAllByYearAsc().pipe(
      map(data=>({dataState : DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetAllDesc(){

    this.frescoes$  = this.frescoesService.getAllByYearDesc().pipe(
      map(data=>({dataState : DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }


  openModal(f:Frescoes) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {f: f};
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

}


