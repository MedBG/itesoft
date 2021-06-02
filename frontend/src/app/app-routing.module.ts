import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrescosesComponent } from './frescoses/frescoses.component';

const routes: Routes = [
  {path:"frescoes", component: FrescosesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
