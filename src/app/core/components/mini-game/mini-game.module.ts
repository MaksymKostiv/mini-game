import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniGameComponent } from './mini-game.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {InputModule} from "../input/input.module";
import {ButtonModule} from "../button/button.module";
import {WinnerModalModule} from "../modals/winner-modal/winner-modal.module";



@NgModule({
    declarations: [
        MiniGameComponent
    ],
    exports: [
        MiniGameComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        InputModule,
        ButtonModule,
        WinnerModalModule
    ]
})
export class MiniGameModule { }
