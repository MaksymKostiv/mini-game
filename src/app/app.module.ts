import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MiniGameModule} from "./core/components/mini-game/mini-game.module";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MiniGameModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
