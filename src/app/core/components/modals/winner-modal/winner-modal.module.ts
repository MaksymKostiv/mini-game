import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnerModalComponent } from './winner-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ButtonModule} from "../../button/button.module";



@NgModule({
  declarations: [
    WinnerModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule
  ]
})
export class WinnerModalModule { }
